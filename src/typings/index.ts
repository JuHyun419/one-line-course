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
  SignIn,
  Main,
}

/**
 * Vertical: Separator located in vertical
 * Horizontal: in horizontal
 */
export enum ESeparatorDirection {
  Vertical,
  Horizontal,
}

export type TCurrency = "₩" | "$" | "￦";
export interface ILectureData {
  id: number;
  imageUrl: string;
  title: string;
  price: number;
  salePrice: number;
  rating: number;
  instructor: string;
  url: string;
  viewCount: number;
  platform: string;
  sessionCount: number;
  currency: TCurrency;
  description: string;
  skills: string;
}

export interface IUserData {
  id: string;
  email: string; // "...@google.com" or "...@kakao.com"
  name: string; // 실제 이름
  imageUrl: string; // 프로필 이미지 URL
  platform: "google" | "kakao"; // 플랫폼 이름 (=string)
}

export interface IBookmarkData {
  id?: number;
  lectureId: number;
  createdAt: Date; // 예: Sun Apr 25 2021 21:29:32 GMT+0900 (Korean Standard Time)
}

export interface ICommentData {
  id?: number;
  userId: string;
  lectureId: number;
  content: string;
  createdAt?: Date;
  updatedAt?: Date;
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
  Clear_Search = "CLEAR_SEARCH",

  Toggle_ResultView = "TOGGLE_RESULT_VIEW",
}

/**
 * User Action Types
 */
export enum EUserAsync_CreateUser_ActionType {
  FetchRequest = "FETCH_REQUEST_CREATE_USER",
  FetchSucceed = "FETCH_SUCCEED_CREATE_USER",
  FetchFail = "FETCH_FAIL_CREATE_USER",
}

export enum EUserAsync_QueryUser_ActionType {
  FetchRequest = "FETCH_REQUEST_QUERY_USER",
  FetchSucceed = "FETCH_SUCCEED_QUERY_USER",
  FetchFail = "FETCH_FAIL_QUERY_USER",
}

export enum EUserAsync_QueryAllMyBookmarks_ActionType {
  FetchRequest = "FETCH_REQUEST_QUERY_ALL_MY_BOOKMARKS",
  FetchSucceed = "FETCH_SUCCEED_QUERY_ALL_MY_BOOKMARKS",
  FetchFail = "FETCH_FAIL_QUERY_ALL_MY_BOOKMARKS",
}

export enum EUserAsync_QueryAllMyComments_ActionType {
  FetchRequest = "FETCH_REQUEST_QUERY_ALL_MY_COMMENTS",
  FetchSucceed = "FETCH_SUCCEED_QUERY_ALL_MY_COMMENTS",
  FetchFail = "FETCH_FAIL_QUERY_ALL_MY_COMMENTS",
}

export enum EUserActionType {
  Set_CurrentUser = "SET_CURRENT_USER",
}

export enum ECommentAsync_AddComment_ActionType {
  FetchRequest = "FETCH_REQUEST_ADD_COMMENT",
  FetchSucceed = "FETCH_SUCCEED_ADD_COMMENT",
  FetchFail = "FETCH_FAIL_ADD_COMMENT",
}

export enum ECommentAsync_RemoveComment_ActionType {
  FetchRequest = "FETCH_REQUEST_REMOVE_COMMENT",
  FetchSucceed = "FETCH_SUCCEED_REMOVE_COMMENT",
  FetchFail = "FETCH_FAIL_REMOVE_COMMENT",
}

export enum ECommentAsync_FixComment_ActionType {
  FetchRequest = "FETCH_REQUEST_FIX_COMMENT",
  FetchSucceed = "FETCH_SUCCEED_FIX_COMMENT",
  FetchFail = "FETCH_FAIL_FIX_COMMENT",
}

export enum ECommentAsync_QueryAllComments_ActionType {
  FetchRequest = "FETCH_REQUEST_QUERY_ALL_COMMENTS",
  FetchSucceed = "FETCH_SUCCEED_QUERY_ALL_COMMENTS",
  FetchFail = "FETCH_FAIL_QUERY_ALL_COMMENTS",
}

export enum ECommentActionType {}
// Set_ImageURL ="SET_COMMENT_IMAGE_URL",
// Set_UserName = "SET_COMMENT_USER_NAME",
// Set_Contents = "SET_COMMENT_CONTENTS",
// Set_CreatedAt = "SET_COMMENT_CREATED_AT",
// Set_

export enum ELectureActionType {
  FetchRequest_QueryLectures = "FETCH_REQUEST_QUERY_LECTURES",
}

export enum ELectureActionType {
  Set_ViewType = "SET_VIEW_TYPE",
  // Set_LectureCountPerPage = "SET_LECTURE_COUNT_PER_PAGE",
  Set_CurrentPage = "SET_CURRENT_PAGE",
}

export enum EBookmarkAsync_AddBookmark_ActionType {
  FetchRequest = "FETCH_REQUEST_ADD_BOOKMARK",
  FetchSucceed = "FETCH_SUCCEED_ADD_BOOKMARK",
  FetchFail = "FETCH_FAIL_ADD_BOOKMARK",
}

export enum EBookmarkAsync_RemoveBookmark_ActionType {
  FetchRequest = "FETCH_REQUEST_REMOVE_BOOKMARK",
  FetchSucceed = "FETCH_SUCCEED_REMOVE_BOOKMARK",
  FetchFail = "FETCH_FAIL_REMOVE_BOOKMARK",
}

export enum EBookmarkAsync_QueryAllBookmarks_ActionType {
  FetchRequest = "FETCH_REQUEST_QUERY_ALL_BOOKMARKS",
  FetchSucceed = "FETCH_SUCCEED_QUERY_ALL_BOOKMARKS",
  FetchFail = "FETCH_FAIL_QUERY_ALL_BOOKMARKS",
}

export enum EBookmarkActionType {
  Toggle_Bookmark = "",
}

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
