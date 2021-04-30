import { ECarouselActionType } from "../../../typings";
import {
  ISetImageIndicatorCurIdxAction,
  ISetImageWidthAction,
  ISetImagePlacerRefAction,
} from "./Actions";

export const setImageIndicatorCurIdx = (idx: number): ISetImageIndicatorCurIdxAction => ({
  type: ECarouselActionType.Set_ImageIndicatorCurIdx,
  idx,
});

export const setImagePlacerRef = (
  ref: React.RefObject<HTMLDivElement>
): ISetImagePlacerRefAction => ({
  type: ECarouselActionType.Set_ImagePlacerRef,
  ref,
});

export const setImgWidth = (imgWidth: number): ISetImageWidthAction => ({
  type: ECarouselActionType.Set_ImageWidth,
  imgWidth,
});
