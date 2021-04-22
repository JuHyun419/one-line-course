import { ECarouselAsyncActionType } from "../../../typings/type";

// Actions
export interface IFetchReqAction_CarouselImageURLs {
  type: ECarouselAsyncActionType.FetchRequest_CarouselImagesURLs;
}

export interface IFetchSucceedAction_CarouselImageURLs {
  type: ECarouselAsyncActionType.FetchSucceed_CarouselImagesURLs;
  urls: Array<string>;
}

export interface IFetchFailAction_CarouselImgURLs {
  type: ECarouselAsyncActionType.FetchFail_CarouselImagesURLs;
  err: string;
}

export type TActions =
  | IFetchReqAction_CarouselImageURLs
  | IFetchSucceedAction_CarouselImageURLs
  | IFetchFailAction_CarouselImgURLs;
