import { Actions as CarouselActions } from "../../action/carousel";

export interface Carousel {
  ref?: React.RefObject<HTMLDivElement>;
  idx: number;
  imgWidth: number;
}

export interface State {
  state: Carousel;
}

const init: Carousel = {
  ref: undefined,
  idx: 0,
  imgWidth: 0,
};

const reducer = (state: Carousel = init, action: CarouselActions): Carousel => {
  switch (action.type) {
    case "SET_CUR_IDX":
      return {
        ...state,
        idx: action.idx,
      };

    case "SET_REF":
      return {
        ...state,
        ref: action.ref,
      };

    case "SET_IMG_WIDTH":
      return {
        ...state,
        imgWidth: action.imgWidth,
      };

    default:
      return state;
  }
};

export default reducer;
