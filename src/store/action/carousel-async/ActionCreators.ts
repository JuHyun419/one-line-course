import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { ECarouselAsyncActionType } from "~/src/typings";
import {
  IFetchFailAction_CarouselImgURLs,
  IFetchRequestAction_CarouselImageURLs,
  IFetchSucceedAction_CarouselImageURLs,
} from "./Actions";
import { get_PhotoPages } from "~/src/service/UnsplashService";

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
    const { data, status } = await get_PhotoPages(query);
    dispatch(
      fetchSucceed_CarouselImageURLs(
        status,
        data!.results.map(el => el.urls.regular)
      )
    );
  } catch (err) {
    dispatch(fetchFail_CarouselImageURLs(err));
  }
};
