import { IBookmarkData, TStatusCode } from "~/src/typings";
import { axiosInstance_Server } from "./Axios";

export const post_AddBookmark = async (
  userID: string,
  bookmarkData: IBookmarkData
): Promise<TStatusCode> => {
  if (userID === "") {
    throw new Error("userID can't be empty");
  }

  try {
    const { status } = await axiosInstance_Server.post(
      `/bookmarks/user/${userID}`,
      {
        bookmarkData,
      }
    );
    return status;
  } catch (err) {
    throw new Error(err);
  }
};

export const delete_RemoveBookmark = async (
  bookmarkID: number
): Promise<TStatusCode> => {
  // TODO: bookmarkID Validation
  // if (bookmarkId === "") {
  //   throw new Error("bookmarkId can't be empty");
  // }

  try {
    const { status } = await axiosInstance_Server.delete(
      `/bookmarks/${bookmarkID}`
    );
    return status;
  } catch (err) {
    throw new Error(err);
  }
};

