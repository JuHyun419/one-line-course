import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { patch_fixComment } from "~/src/service/CommentService";

import {
  ECommentAsync_FixComment_ActionType,
  ICommentData,
  TStatusCode,
} from "~/src/typings";

import {
  IFetchRequestAction_FixComment,
  IFetchSucceedAction_FixComment,
  IFetchFailAction_FixComment,
} from "./Actions";

const fetchRequest_FixComment = (): IFetchRequestAction_FixComment => ({
  type: ECommentAsync_FixComment_ActionType.FetchRequest,
});

const fetchSucceed_FixComment = (
  status: TStatusCode
): IFetchSucceedAction_FixComment => ({
  type: ECommentAsync_FixComment_ActionType.FetchSucceed,
  status,
});

const fetchFail_FixComment = (err: string): IFetchFailAction_FixComment => ({
  type: ECommentAsync_FixComment_ActionType.FetchFail,
  err,
});

export const initFetch_FixComment = (fixedCommentData: ICommentData) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(fetchRequest_FixComment());
    const status = await patch_fixComment(fixedCommentData);
    dispatch(fetchSucceed_FixComment(status));
  } catch (err) {
    dispatch(fetchFail_FixComment(err));
  }
};
