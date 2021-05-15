import { IBookmarkData, TStatusCode } from "~/src/typings";
import { axiosInstance_Server } from "./Axios";

export const post_AddBookmark = async (
  userId: string,
  bookmarkData: IBookmarkData
): Promise<{
  createdBookmark: IBookmarkData;
  status: TStatusCode;
}> => {
  try {
    const { data, status } = await axiosInstance_Server.post(`/bookmarks`, {
      userId,
      lectureId: bookmarkData.lectureId,
    });
    const createdBookmark = data as IBookmarkData;
    return { createdBookmark, status };
  } catch (err) {
    throw new Error(err);
  }
};

export const delete_RemoveBookmark = async (
  bookmarkID: number
): Promise<TStatusCode> => {
  try {
    const { status } = await axiosInstance_Server.delete(
      `/bookmarks/${bookmarkID}`
    );
    return status;
  } catch (err) {
    throw new Error(err);
  }
};
