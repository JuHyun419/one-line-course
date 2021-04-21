import { EMainCarouselImageActions } from "../../typings/type";

export const updateCurrentImagesPlacerIndex = (newIdx: number) => ({
  type: EMainCarouselImageActions.UPDATE_CURRENT_IMAGES_PLACER_INDEX,
  payload: newIdx,
});

export const updateImagesPlacerRef = (
  newImagePlacerRef: React.RefObject<HTMLDivElement>
) => ({
  type: EMainCarouselImageActions.UPDATE_IMAGES_PLACER_REF,
  payload: newImagePlacerRef,
});
