import {
  EMainCarouselImageFetchActions,
  MainCarouselImageFetchDispatch,
} from "../../typings/type";
import { getPhotoPage } from "../../service/UnsplashService";

export const fetchImagesRequest = () => ({
  type: EMainCarouselImageFetchActions.FETCH_IMAGES_REQUEST,
});

export const fetchImagesSucceed = (urls: Array<string>) => ({
  type: EMainCarouselImageFetchActions.FETCH_IMAGES_SUCCEED,
  payload: {
    urls,
    length: urls.length,
  },
});

export const fetchImagesFail = (error: Error) => ({
  type: EMainCarouselImageFetchActions.FETCH_IMAGES_FAIL,
  payload: error,
});

export const initFetchImages = (query: { query: string }) => async (
  dispatch: MainCarouselImageFetchDispatch
) => {
  try {
    dispatch(fetchImagesRequest());
    const queryResult = await getPhotoPage(query);
    const imageURLs = queryResult?.results;
    console.log(imageURLs);
    dispatch(fetchImagesSucceed(imageURLs.map(el => el.urls.regular)));
  } catch (err) {
    dispatch(fetchImagesFail(err));
  }
};
