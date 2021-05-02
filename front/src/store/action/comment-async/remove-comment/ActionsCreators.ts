import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { delete_RemoveComment } from "~/src/service/CommentService";

import {
  ECommentAsync_RemoveComment_ActionType,
  TStatusCode,
} from "~/src/typings";
import {
  IFetchRequestAction_RemoveComment,
  IFetchSucceedAction_RemoveComment,
  IFetchFailAction_RemoveComment,
} from "./Actions";

const fetchRequest_RemoveComment = (): IFetchRequestAction_RemoveComment => ({
  type: ECommentAsync_RemoveComment_ActionType.FetchRequest,
});

const fetchSucceed_RemoveComment = (
  status: TStatusCode
): IFetchSucceedAction_RemoveComment => ({
  type: ECommentAsync_RemoveComment_ActionType.FetchSucceed,
  status,
});

const fetchFail_RemoveComment = (
  err: string
): IFetchFailAction_RemoveComment => ({
  type: ECommentAsync_RemoveComment_ActionType.FetchFail,
  err,
});

export const initFetch_RemoveComment = (commentID: number) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  try {
    dispatch(fetchRequest_RemoveComment());
    const status = await delete_RemoveComment(commentID);
    dispatch(fetchSucceed_RemoveComment(status));
  } catch (err) {
    dispatch(fetchFail_RemoveComment(err));
  }
};
