// import { AnyAction } from "redux";
// import { ThunkDispatch } from "redux-thunk";
// import { FetchSucceed } from "./Actions";
// import { getPhotoPage } from "../../../service/UnsplashService";

// // Creators
// export const fetchRequest = (): FetchReq => ({
//   type: "FETCH_REQUEST_CAROUSEL",
// });

// export const fetchSucceed = (urls: Array<string>): FetchSucceed => ({
//   type: "FETCH_SUCCEED",
//   urls,
// });

// export const fetchFail = (err: string): FetchFail => ({
//   type: "FETCH_FAIL",
//   err,
// });

// export const initFetch = (query: { query: string }) => async (
//   dispatch: ThunkDispatch<{}, {}, AnyAction>
// ) => {
//   try {
//     dispatch(fetchRequest());
//     const queryResult = await getPhotoPage(query);
//     const imageURLs = queryResult?.results;
//     dispatch(fetchSucceed(imageURLs.map(el => el.urls.regular)));
//   } catch (err) {
//     dispatch(fetchFail(err));
//   }
// };
