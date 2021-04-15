// import { createApi } from "unsplash-js";
import { axiosInstance_Unsplash } from "./Axios";

export const getRandomPhotos = async () =>
  await axiosInstance_Unsplash.get(
    `/photos/random/?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  );

