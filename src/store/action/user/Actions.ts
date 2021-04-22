export interface FetchReqUser {
  type: "FETCH_REQUEST_CAROUSEL";
  id: string;
  email: string;
  name: string;
  imageURL: string;
  platform: string;
}

export interface FetchSucceed {
  type: ""
}

export interface FetchFail {

}

// export type Actions = FetchReq;
