import { IBookmarkData, IUserData, TStatusCode } from "~/src/typings";
import { axiosInstance_Server } from "./Axios";

export const get_IsAuthenticated = async (
  userID: string
): Promise<{
  isAuthenticated: boolean;
  status: TStatusCode;
}> => {
  if (userID === "") {
    throw new Error("userID can't be empty");
  }

  const { data, status } = await axiosInstance_Server.get(`/users/${userID}`);
  const { isAuthenticated } = data;
  return { isAuthenticated, status };
};

export const post_RegisterUser = async (
  userData: IUserData
): Promise<TStatusCode> => {
  const { status } = await axiosInstance_Server.post(`/users`, {
    userData: userData,
  });
  return status;
};

export const get_QueryAllMyBookmarks = async (
  userID: string
): Promise<{
  bookmarkData: IBookmarkData;
  status: TStatusCode;
}> => {
  const { data, status } = await axiosInstance_Server.get(
    `/bookmarks/users/${userID}`
  );
  const bookmarkData = data as IBookmarkData;
  return { bookmarkData, status };
};
