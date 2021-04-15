import { createApi } from "unsplash-js";
import { Photos } from "unsplash-js/dist/methods/search/types/response";
import { axiosInstance_Unsplash } from "./Axios";

export const getRandomPhotos = async () =>
  (await axiosInstance_Unsplash.get(
    `/photos/random/?client_id=${process.env.UNSPLASH_ACCESS_KEY}`
  )) as typeof Unsplash_Img;

const unsplash = createApi({
  accessKey: process.env.UNSPLASH_ACCESS_KEY.toString(),
});

export const getPhotoPage = async ({
  query,
  page,
  perPage,
  orderBy,
  collectionIds,
  contentFilter,
  color,
  orientation,
}: typeof Unsplash_PhotoSearch) =>
  (
    await unsplash.search.getPhotos({
      query,
      page,
      perPage,
      orderBy,
      collectionIds,
      contentFilter,
      color,
      orientation,
    })
  ).response! as Photos;
