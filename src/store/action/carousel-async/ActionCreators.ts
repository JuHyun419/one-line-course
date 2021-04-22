import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { ECarouselAsyncActionType } from "../../../typings/type";
import {
  IFetchFailAction_CarouselImgURLs,
  IFetchRequestAction_CarouselImageURLs,
  IFetchSucceedAction_CarouselImageURLs,
} from "./Actions";
import { getPhotoPage } from "../../../service/UnsplashService";

// Creators
export const fetchRequest_CarouselImageURLs = (): IFetchRequestAction_CarouselImageURLs => ({
  type: ECarouselAsyncActionType.FetchRequest_CarouselImagesURLs,
});

export const fetchSucceed_CarouselImageURLs = (
  urls: Array<string>
): IFetchSucceedAction_CarouselImageURLs => ({
  type: ECarouselAsyncActionType.FetchSucceed_CarouselImagesURLs,
  urls,
});

export const fetchFail_CarouselImageURLs = (
  err: string
): IFetchFailAction_CarouselImgURLs => ({
  type: ECarouselAsyncActionType.FetchFail_CarouselImagesURLs,
  err,
});

export const initFetch_CarouselImageURLs = (query: { query: string }) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(fetchRequest_CarouselImageURLs());
    const queryResult = await getPhotoPage(query);
    const imageURLs = queryResult?.results;
    dispatch(
      fetchSucceed_CarouselImageURLs(imageURLs.map(el => el.urls.regular))
    );
  } catch (err) {
    dispatch(fetchFail_CarouselImageURLs(err));
  }
};
