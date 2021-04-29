import {
  IBookmarkData,
  ICommentData,
  IUserData,
  TStatusCode,
} from "~/src/typings";
import { axiosInstance_Server } from "./Axios";

export const get_QueryUser = async (
  userID: string
): Promise<{
  userData: IUserData;
  status: TStatusCode;
}> => {
  if (userID === "") {
    throw new Error("userID can't be empty");
  }

  try {
    const { data, status } = await axiosInstance_Server.get(`/users/${userID}`);
    const userData = data as IUserData;
    return { userData, status };
  } catch (err) {
    throw new Error(err);
  }
};

export const post_RegisterUser = async (
  userData: IUserData
): Promise<TStatusCode> => {
  try {
    const { status } = await axiosInstance_Server.post(`/users`, {
      userData,
    });
    return status;
  } catch (err) {
    throw new Error(err);
  }
};

export const get_QueryAllMyBookmarks = async (
  userID: string
): Promise<{
  bookmarkData: IBookmarkData[];
  status: TStatusCode;
}> => {
  try {
    const { data, status } = await axiosInstance_Server.get(
      `/bookmarks/users/${userID}`
    );
    const bookmarkData = data as IBookmarkData[];
    return { bookmarkData, status };
  } catch (err) {
    throw new Error(err);
  }
};

export const get_QueryAllMyComments = async (
  userID: string
): Promise<{
  commentData: ICommentData[];
  status: TStatusCode;
}> => {
  try {
    const { data, status } = await axiosInstance_Server.get(
      `/comments/users/${userID}`
    );
    const commentData = data as ICommentData[];
    return { commentData, status };
  } catch (err) {
    throw new Error(err);
  }
};
