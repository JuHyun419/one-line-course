// Actions
export interface FetchReq {
  type: "FETCH_REQUEST";
}

export interface FetchSucceed {
  type: "FETCH_SUCCEED";
  urls: Array<string>;
}

export interface FetchFail {
  type: "FETCH_FAIL";
  err: string;
}


export type Actions =
  | FetchReq
  | FetchSucceed
  | FetchFail
