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
  status: number,
  urls: Array<string>
): IFetchSucceedAction_CarouselImageURLs => ({
  type: ECarouselAsyncActionType.FetchSucceed_CarouselImagesURLs,
  status,
  urls,
});

export const fetchFail_CarouselImageURLs = (
  status: number,
  err: string
): IFetchFailAction_CarouselImgURLs => ({
  type: ECarouselAsyncActionType.FetchFail_CarouselImagesURLs,
  status,
  err,
});

export const initFetch_CarouselImageURLs = (query: { query: string }) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(fetchRequest_CarouselImageURLs());
    const { data, status } = await getPhotoPage(query);
    dispatch(
      fetchSucceed_CarouselImageURLs(
        status,
        data.results.map(el => el.urls.regular)
      )
    );
  } catch (err) {
    dispatch(fetchFail_CarouselImageURLs(400, err));
  }
};
