import { AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { get_QueryAllComments } from "~/src/service/CommentService";
import {
  ECommentAsync_QueryAllComments_ActionType,
  ICommentData,
  TStatusCode,
} from "~/src/typings";
import {
  IFetchRequestAction_QueryAllComments,
  IFetchSucceedAction_QueryAllComments,
  IFetchFailedAction_QueryAllComments,
} from "./Actions";

const fetchRequest_QueryAllComments = (): IFetchRequestAction_QueryAllComments => ({
  type: ECommentAsync_QueryAllComments_ActionType.FetchRequest,
});

const fetchSucceed_QueryAllComments = (
  comments: ICommentData[],
  status: TStatusCode
): IFetchSucceedAction_QueryAllComments => ({
  type: ECommentAsync_QueryAllComments_ActionType.FetchSucceed,
  comments,
  status,
});

const FetchFail_QueryAllComments = (
  err: string
): IFetchFailedAction_QueryAllComments => ({
  type: ECommentAsync_QueryAllComments_ActionType.FetchFail,
  err,
});

export const initFetch_QueryAllComments = (lectureID: number) => async (
  dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
  // TODO: lectureID validation
  try {
    dispatch(fetchRequest_QueryAllComments());
    const { commentData, status } = await get_QueryAllComments(lectureID);
    const comments = commentData as ICommentData[];
    dispatch(fetchSucceed_QueryAllComments(comments, status));
  } catch (err) {
    dispatch(FetchFail_QueryAllComments(err));
  }
};
