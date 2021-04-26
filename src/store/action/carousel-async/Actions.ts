import { ECarouselAsyncActionType } from "../../../typings";

// Actions
export interface IFetchRequestAction_CarouselImageURLs {
  type: ECarouselAsyncActionType.FetchRequest_CarouselImagesURLs;
}

export interface IFetchSucceedAction_CarouselImageURLs {
  type: ECarouselAsyncActionType.FetchSucceed_CarouselImagesURLs;
  status: number;
  urls: Array<string>;
}

export interface IFetchFailAction_CarouselImgURLs {
  type: ECarouselAsyncActionType.FetchFail_CarouselImagesURLs;  
  err: string;
}

export type TActions =
  | IFetchRequestAction_CarouselImageURLs
  | IFetchSucceedAction_CarouselImageURLs
  | IFetchFailAction_CarouselImgURLs;
