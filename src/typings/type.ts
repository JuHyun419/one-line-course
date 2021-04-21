import React from "react";
import { Action } from "redux";

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
export interface MainCarouselImageFetchState {
  images: Array<string>;
  imagesCount: number;
  error: Error | null;
  loading: boolean;
}
export type TMainCarouselImageFetchSucceed = { urls: Array<string>; length: number };
export type MainCarouselImageFetchPayload =
  | TMainCarouselImageFetchSucceed
  | Error
  | boolean
  | null;

/**
 *
 */
export interface MainCarouselImageFetchAction extends Action {
  type: EMainCarouselImageFetchActions;
  payload?: MainCarouselImageFetchPayload;
}

/**
 *
 */
export type MainCarouselImageFetchDispatch = (
  args: MainCarouselImageFetchAction
) => MainCarouselImageFetchAction;

export enum EMainCarouselImageFetchActions {
  FETCH_IMAGES_REQUEST,
  FETCH_IMAGES_SUCCEED,
  FETCH_IMAGES_FAIL,
}

export interface MainCarouselImageState {
  imagesPlacerRef: React.RefObject<HTMLDivElement> | null;
  currentImagesPlacerIndex: number;
}

export type MainCarouselImagePayload =
  | number
  | React.RefObject<HTMLDivElement>
  | null;

export interface MainCarouselImageAction extends Action {
  type: EMainCarouselImageActions;
  payload: MainCarouselImagePayload;
}

export type MainCarouselImageDispatch = (
  args: MainCarouselImageAction
) => MainCarouselImageAction;

export enum EMainCarouselImageActions {
  UPDATE_IMAGES_PLACER_REF,
  UPDATE_CURRENT_IMAGES_PLACER_INDEX,
}
