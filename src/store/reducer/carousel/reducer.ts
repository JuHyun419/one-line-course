import { ECarouselActionType } from "../../../typings";
import { TActions as TCarouselActions } from "../../action/carousel";

export interface ICarousel {
  ref?: React.RefObject<HTMLDivElement>;
  idx: number;
  imgWidth: number;
}

export interface IState {
  state: ICarousel;
}

const init: ICarousel = {
  ref: undefined,
  idx: 0,
  imgWidth: 0,
};

const reducer = (
  state: ICarousel = init,
  action: TCarouselActions
): ICarousel => {
  switch (action.type) {
    case ECarouselActionType.Set_ImageIndicatorCurIdx:
      return {
        ...state,
        idx: action.idx,
      };

    case ECarouselActionType.Set_ImagePlacerRef:
      return {
        ...state,
        ref: action.ref,
      };

    case ECarouselActionType.Set_ImageWidth:
      return {
        ...state,
        imgWidth: action.imgWidth,
      };

    default:
      return state;
  }
};

export default reducer;
