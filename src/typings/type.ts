import React from "react";
import { Action, CombinedState, Reducer, Store, Dispatch } from "redux";

/**
 *
 */
export enum EButtonSize {
  Small = "btn-small",
  Medium = "btn-medium",
  Large = "btn-large",
}

/**
 *
 */
export enum EButtonType {
  Primary = "primary",
  Alt = "alt",
  Warning = "warning",
  Danger = "danger",
}

/**
 *
 */
export interface TOnClick {
  (event?: React.MouseEvent<HTMLDivElement>, linkTo?: string): void;
}

/**
 *
 */
export enum EMenuMode {
  BeforeLogin,
  AfterLogin,
}

/**
 *
 */
export enum ENavType {
  Landing,
  SignIn,
  AfterLogin,
}

/**
 * Vertical: Separator located in vertical
 * Horizontal: in horizontal
 */
export enum ESeparatorDirection {
  Vertical,
  Horizontal,
}

/**
 *
 */



/**
 *
 */
// export type TImgDispatch = (args: ImgAction) => ImgAction;
// export type TImgDispatch = Dispatch<ICarouselImgAction>;

// export interface CarouselState {
//   carouselRef: React.RefObject<HTMLDivElement> | null;
//   curIdx: number;
// }

// export interface CarouselAction extends Action {
//   type: ECarouselActions;
//   payload?: CarouselState;
// }

// export type TCarouselDispatch = (args: CarouselAction) => CarouselAction;

// export enum ECarouselActions {
//   UPDATE_REF,
//   UPDATE_CUR_IDX,
// }

// export type TCombinedStates = CombinedState<{
//   imgFetcher: ICarouselImg;
//   carousel: CarouselState;
// }>;

// export type TCombinedActions = ICarouselImgAction | CarouselAction;

// export type TRootReducer = Reducer<TCombinedStates, TCombinedActions>;

// export type TStore = Store<TCombinedStates, TCombinedActions> & {
//   // dispatch: TCarouselDispatch | TImgDispatch;
// };
