import { createApi } from "unsplash-js";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
// import { axiosInstance_Unsplash } from "./Axios";

// export const getRandomPhotos = async () =>
//   (await axiosInstance_Unsplash.get(
//     `/photos/random/?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
//   )) as typeof Unsplash_Img;

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY,
});

export const getPhotoPage = async (
  queries: typeof Unsplash_PhotoSearch
): Promise<{
  data: Photos | undefined;
  status: number;
}> => {
  const { response: data, status } = await unsplash.search.getPhotos(queries);
  return { data, status };
};
