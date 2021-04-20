import { Action, Reducer } from "redux";
import * as actionType from "../action/ActionTypes";

export interface CarouselImageState {
  images: Array<string>;
  imagesCount: number;
}

export interface CarouselImageAction extends Action {
  type: string;
  payload: CarouselImageState;
}

export type CarouselImageDispatch = (
  args: CarouselImageAction
) => CarouselImageAction;

const initState: CarouselImageState = {
  images: [],
  imagesCount: 0,
};

const CarouselImageReducer: Reducer<CarouselImageState, CarouselImageAction> = (
  state: CarouselImageState = initState,
  action: CarouselImageAction
): CarouselImageState => {
  switch (action.type) {
    case actionType.FETCH_IMAGES:
      return {
        images: action.payload.images,
        imagesCount: action.payload.imagesCount,
      };

    default:
      return state;
  }
};

export default CarouselImageReducer;
