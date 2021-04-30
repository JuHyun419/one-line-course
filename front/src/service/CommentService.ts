import { ICommentData, TStatusCode } from "../typings";
import { axiosInstance_Server } from "./Axios";

export const post_AddComment = async (
  lectureID: number,
  commentData: ICommentData
): Promise<TStatusCode> => {
  // TODO: lectureID validation

  try {
    const { status } = await axiosInstance_Server.post(`/comments`, {
      lectureID,
      commentData,
    });
    return status;
  } catch (err) {
    throw new Error(err);
  }
};

export const patch_fixComment = async (
  commentData: ICommentData
): Promise<TStatusCode> => {
  // TODO: commentID Validation

  try {
    const { status } = await axiosInstance_Server.patch(
      `/comments/${commentData.commentID}`,
      {
        commentData,
      }
    );
    return status;
  } catch (err) {
    throw new Error(err);
  }
};

export const delete_RemoveComment = async (
  commentID: number
): Promise<TStatusCode> => {
  // TODO: commentID Validation

  try {
    const { status } = await axiosInstance_Server.delete(
      `/comments/${commentID}`
    );
    return status;
  } catch (err) {
    throw new Error(err);
  }
};

export const get_QueryAllComments = async (
  lectureID: number
): Promise<{
  commentData: ICommentData[];
  status: TStatusCode;
}> => {
  try {
    const { data, status } = await axiosInstance_Server.get(
      `/comments/lectures/${lectureID}`
    );
    const commentData = data as ICommentData[];
    return { commentData, status };
  } catch (err) {
    throw new Error(err);
  }
};
