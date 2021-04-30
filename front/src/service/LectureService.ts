import { ILectureData, TStatusCode } from "~/src/typings";
import { axiosInstance_Server } from "./Axios";

export const get_AllLectures = async (): Promise<{
  data: Array<ILectureData>;
  status: TStatusCode;
}> => {
  const { data, status } = await axiosInstance_Server.get("/lectures");
  return { data, status };
};
