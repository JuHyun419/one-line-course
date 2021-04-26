import { IUserData, TStatusCode } from "~/src/typings";
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

  try {
    const { data, status } = await axiosInstance_Server.get(`/users/${userID}`);
    const { isAuthenticated } = data;
    return { isAuthenticated, status };
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
