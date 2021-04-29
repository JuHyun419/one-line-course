import { ECarouselActionType } from "../../../typings/type";

export interface ISetImageIndicatorCurIdxAction {
  type: ECarouselActionType.Set_ImageIndicatorCurIdx;
  idx: number;
}

export interface ISetImagePlacerRefAction {
  type: ECarouselActionType.Set_ImagePlacerRef;
  ref: React.RefObject<HTMLDivElement>;
}

export interface ISetImageWidthAction {
  type: ECarouselActionType.Set_ImageWidth;
  imgWidth: number;
}

export type TActions =
  | ISetImageIndicatorCurIdxAction
  | ISetImagePlacerRefAction
  | ISetImageWidthAction;
