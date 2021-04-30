import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { post_AddComment } from "~/src/service/CommentService";

import {
  ICommentData,
  ECommentAsync_AddComment_ActionType,
} from "~/src/typings";
import {
  IFetchRequestAction_AddComment,
  IFetchSucceedAction_AddComment,
  IFetchFailAction_AddComment,
} from "./Actions";

const fetchRequest_AddComment = (): IFetchRequestAction_AddComment => ({
  type: ECommentAsync_AddComment_ActionType.FetchRequest,
});

const fetchSucceed_AddComment = (
  statusCode: number
): IFetchSucceedAction_AddComment => ({
  type: ECommentAsync_AddComment_ActionType.FetchSucceed,
  statusCode,
});

const fetchFail_AddComment = (err: string): IFetchFailAction_AddComment => ({
  type: ECommentAsync_AddComment_ActionType.FetchFail,
  err,
});

export const initFetch_AddComment = (
  lectureID: number,
  commentData: ICommentData
) => async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
  // TODO: lectureID validation
  // TODO: cooment validation

  try {
    dispatch(fetchRequest_AddComment());
    const status = await post_AddComment(lectureID, commentData);
    dispatch(fetchSucceed_AddComment(status));
  } catch (err) {
    dispatch(fetchFail_AddComment(err));
  }
};
