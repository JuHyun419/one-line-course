// https://developers.kakao.com/docs/latest/ko/kakaologin/js#req-user-info
type UserMeObject = any;

declare var Kakao: {
  init: (api_key: string) => void;

  isInitialized: () => boolean;

  Auth: {
    login: ({
      success,
      fail,
    }: {
      success?: (authObj: any) => void;
      fail?: (error: any) => void;
    }) => void;
    /**
     *
     */
    authorize: (authParam: {
      redirectURI?: string;
      state?: string;
      scope?: string;
      throughTalk?: boolean;
    }) => void;
  };

  API: {
    request: (reqParam: {
      url?: string;
      success?: (onSuccess: object) => void;
      fail?: (onFail: object) => void;
      always?: (onAlways: object) => void;
      data?: UserMeObject;
    }) => void;
  };
};
