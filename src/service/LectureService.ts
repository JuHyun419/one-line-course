import { ILectureFetchResult } from "../typings/type";
import { axiosInstance_Server } from "./Axios";

type TStatusCode = number;

export const getLectures = async (): Promise<{
  data: Array<ILectureFetchResult>;
  status: TStatusCode;
}> => {
  const { data, status } = await axiosInstance_Server.get("/lectures");
  return { data, status };
};
