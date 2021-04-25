import React from "react";
// import { Action, CombinedState, Reducer, Store, Dispatch } from "redux";

export type TStatusCode = number;

/**
 *
 */
export enum EButtonSize {
  XSmall = "btn-xsmall",
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
export interface TOnClickButton<T extends HTMLElement> {
  (event?: React.MouseEvent<T>, linkTo?: string): void;
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
export enum ELectureCardType {
  GridView,
  ListView,
}

/**
 * Carousel Action Types
 */
export enum ECarouselAsyncActionType {
  FetchRequest_CarouselImagesURLs = "FETCH_REQUEST_CAROUSEL_IMAGES_URLS",
  FetchSucceed_CarouselImagesURLs = "FETCH_SUCCEED_CAROUSEL_IMAGES_URLS",
  FetchFail_CarouselImagesURLs = "FETCH_FAIL_CAROUSEL_IMAGES_URLS",
}

export enum ECarouselActionType {
  Set_ImageIndicatorCurIdx = "SET_IMAGE_INDICATOR_CURRENT_INDEX",
  Set_ImagePlacerRef = "SET_IMAGE_PLACER_REF",
  Set_ImageWidth = "SET_IMAGE_WIDTH",
}

/**
 * Search Action Types
 */
export enum ESearchActionType {
  Set_SelectedKeyword = "SET_SELECTED_KEYWORD",
  Set_SelectedPlatform = "SET_SELECTED_PLATFORM",
  Clear_SelectedAll = "CLEAR_SELECTED_ALL",
}

export enum ESearchAsyncActionType {
  FetchRequest_RetrieveLectures = "FETCH_REQUEST_RETRIEVE_LECTURES",
  FetchSucceed_RetrieveLectures = "FETCH_SUCCEED_RETRIEVE_LECTURES",
  FetchFail_RetrieveLectures = "FETCH_FAIL_RETRIEVE_LECTURES",
}

/**
 * SearchBar Action Types
 */
export enum ESearchBarActionType {
  Toggle_SearchBar = "TOGGLE_SEARCH_BAR",
  Open_SearchBar = "OPEN_SEARCH_BAR",
  Close_SearchBar = "CLOSE_SEARCH_BAR",
  Set_CurrentInput = "SET_CURRENT_INPUT",
  Toggle_InvalidKeyword_WarningRef = "TOGGLE_INVALID_KEYWORDS_WARNING_REF",
}

/**
 * Search Suggestion Action Types
 */
export enum ESearchSuggestionActionType {
  Set_Suggestion = "SET_SUGGESTION",
  Clear_Suggestion = "CLEAR_SUGGESTION",
}

/**
 * Search Result Action Type
 */
export enum ESearchResultActionType {
  Start_Search = "START_SEARCH",
  Succeed_Search = "SUCCEED_SEARCH",
  Fail_Search = "FAIL_SEARCH",

  Toggle_ResultView = "TOGGLE_RESULT_VIEW",
}

export interface IUserData {
  platform: "google" | "kakao"; // 플랫폼 이름 (=string)
  userID: string;
  data: {
    email: string; // "...@google.com" or "...@kakao.com"
    name: string; // 실제 이름
    imageURL: string; // 프로필 이미지 URL
  };
}

export interface IBookmarkData {
  bookmarkID: number;
  userID: string; // 테이블에는 typeof(userID) == bigInt 던데.. 확인 부탁 드려요
  lectureID: number;
  createdAt: Date; // 예: Sun Apr 25 2021 21:29:32 GMT+0900 (Korean Standard Time)
}
/**
 * User Action Types
 */
export enum EUserAsyncActionType {
  FetchRequest_CreateUser = "FETCH_REQUEST_CREATE_USER",
  FetchSucceed_CreateUser = "FETCH_SUCCEED_CREATE_USER",
  FetchFail_CreateUser = "FETCH_FAIL_CREATE_USER",
}

export enum EUserActionType {}

export enum ECommentAsyncActionType {}

export enum ECommentActionType {}

export interface ILectureFetchResult {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  salePrices: number;
  rating: number;
  instructor: string;
  url: string;
  viewCount: number;
  platform: string;
  sessionCount: number;
  currency: string;
  description: string;
  skills: string;
}

export enum ELectureActionType {
  FetchRequest_QueryLectures = "FETCH_REQUEST_QUERY_LECTURES",
}

export enum ELectureActionType {
  Set_ViewType = "SET_VIEW_TYPE",
  // Set_LectureCountPerPage = "SET_LECTURE_COUNT_PER_PAGE",
  Set_CurrentPage = "SET_CURRENT_PAGE",
}

export enum EBookmarkAsyncActionType {}

export enum EBookmarkActionType {}

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
