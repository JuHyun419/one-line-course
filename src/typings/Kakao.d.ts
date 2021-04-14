// https://developers.kakao.com/docs/latest/ko/kakaologin/js#req-user-info
// https://developers.kakao.com/sdk/reference/js/release/Kakao.API.html#APIUrl

/**
 * @example
 * "properties.nickname": 서비스에서 쓰이는 사용자 닉네임, 기본 값은 앱 연결 시의 카카오 계정 닉네임
 * "properties.profile_image": 서비스에서 쓰이는 사용자 프로필 프로필 이미지 URL, 기본 값은 앱 연결 시의 카카오계정 프로필 이미지 URL(640 * 640)
 * "properties.thumbnail_image": 서비스에서 쓰이는 사용자 썸네일 이미지 URL, 기본 값은 앱 연결 시의 카카오계정 썸네일 프로필 이미지 URL(110 * 110)
 * "kakao_account.acount.profile": 카카오계정의 프로필 소유 여부. 실시간 닉네임과 프로필 이미지 URL
 * "kakao_account.account.email": 카카오 계정의 이메일 소유 여부. 이메일 값, 이메일 인증 여부, 이메일 유효 여부
 * "kakao_account.age_range": 카카오계정의 연령대 소유 여부, 연령대 값
 * "kakao_account.birthday": 카카오계정의 생일 소윺 여부, 생일 값
 * "kakao_account.gender": 카카오계정의 성별 소유 여부, 성별 값
 */
type UserMeObject = {
  [propertyKeys: string]: string;
};

/**
 * @example
 *
 */
type UpdateProfileObject = {
  properties: {
    [prop: string]: string;
  };
};

/**
 * APIUrl
 * 호스트가 dapi.kakao.com인 API (검색, 로컬)는 제외되며, Ajax를 통해 직접 요청할 수 있습니다.
 * 어드민 키를 사용하는 API (인증, 푸시, 페이)는 제외됩니다. 푸시 알림 기능은 지원되지 않습니다.
 *
 * @example
 * "/v2/user/me" -> 정보 요청 주소,
 * "/v1/user/unlink" -> 토큰 만료 시키기 (logout),
 * 서비스의 탈퇴 처리는 연결 끊기 후 직접 구현해야 합니다.
 * 해당 함수는 사용자와 개발자 웹사이트 앱의 연결을 끊는 함수이며 서비스 탈퇴에 영향을 미치지 않습니다.
 * "/v1/user/update_profile" -> 사용자 정보 저장하기
 * properties 파라미터에 액세스 토큰과 함께 저장할 항목의 키와 값을 JSON 형식의 목록으로 담아 POST로 요청합니다.
 */
type APIURL = "/v2/user/me" | "/v1/user/unlink" | "/v1/user/update_profile";

type KakaoUserProfile = {
  nickname?: string;
  profile_image?: string;
  thumbnail_image_url?: string;
  profile_needs_agreement?: boolean;
};

/**
 * @
 */
type KakaoAccount = {
  profile?: KakaoUserProfile;
  email?: string;
  age_range?: string;
  birthday?: string;
  birthyear?: string;
  gender?: string;
  phone_number?: string;
  ci?: string;
};

/**
 *
 */
type AuthSuccessCallback = {
  access_token: string;
  refresh_token: string;
  token_type: "bearer";
  expires_in: number;
  scope: string;
};

type AuthFailCallback = {
  error: "access_denied";
  error_description: string;
};

/**
 * 카카오 로그인 후 제공되는 사용자 정보 종류를 안내합니다. 이름과 자료형은 REST API 응답 바탕으로 기재했습니다.
 * 일부 정보는 취급에 명확한 용도나 주의가 필요한 정보로써 권한을 받아야만 사용할 수 있습니다.
 * synched_at은 카카오싱크 서비스에만 제공되는 정보입니다.
 *
 * @param id 회원번호
 * @param kakao_account 카카오 계정 정보
 * @param synched_at 카카오싱크 간편가입을 통해 로그인한 시각, UTC (RFC3339 internet date/time format)
 * @param connected_at 서비스에 연결 완료된 시각, UTC (RFC3339 internet date/time format)
 * 카카오싱크 간편가입 사용자라면 connected_at과 synched_at 값이 같습니다. 시간 정보는 UTC 기준으로, 한국 시간(KST)과 9시간 차이가 납니다.
 * @param properties 사용자 프로퍼티
 */
type AuthStatusCallback = {
  statueObj: {
    status: "connected" | "not_connected";
    user: {
      id?: number;
      kakao_acount?: KakaoAccount;
      synched_at?: DateTime;
      connected_at?: DateTime;
      properties?: { [prop: string]: string };
    };
  };
};

declare var Kakao: {
  /**
   * Kakao js SDK 에서 사용한 리소스를 해제.
   */
  cleanup: () => void;
  /**
   * Kakao js SDK 를 초기화. SDK 사용 전에 호출해야 합니다.
   */
  init: (appKey: string) => void;
  /**
   * Kakao js SDK 의 초기화 여부.
   */
  isInitialized: () => boolean;
  /**
   * Kakao js SDK 버전.
   */
  VERSION: string;

  API: {
    /**
     * 로그인 버튼을 생성하기 위해 삽입한 iframe을 삭제하고 리소스를 해제합니다.
     */
    cleanup: () => void;
    /**
     * 사용자 정보 가져오기 API를 호출합니다.
     * @param url request url -> TRequestURL 에 설명
     * @param data 특정 사용자 정보만 지정해서 요청하는 데 사용
     * @param files 파일 첨부가 필요한 API 에서 이용하는 파일 파라미터
     * @param success
     * @param fail
     * @param always
     */
    request: (reqParam: {
      url: APIURL;
      data?: UserMeObject | UpdateProfileObject;
      files?: any;
      success?: (onSuccess: object) => void;
      fail?: (onFail: object) => void;
      always?: (onAlways: object) => void;
    }) => unknown;
  };

  Auth: {
    /**
     * API로 간편 로그인을 요청합니다. 간편 로그인은 카카오계정 ID 및 비밀번호 입력 없이
     * 카카오톡을 통해 사용자를 인증하고 인가 코드를 발급받는 기능입니다.
     *
     * API를 호출하면 카카오 로그인 동의 화면을 띄울 수 있습니다.
     * 동의 화면에서 사용자가 사용자 정보 제공 및 기능 활용 동의를 하고 [동의하고 계속하기] 버튼을 누르면
     * 인가 코드 응답이 서비스 서버의 Redirect URI로 HTTP 302 리다이렉트(Redirect)됩니다.
     *
     * @param redirectURI 인가 코드를 받을 URI
     * @param state 인가 코드 요청과 응답 과정에서 유지할 수 있는 파라미터
     * @param scope 추가 동의 받을 항목의 키
     * @param throughTalk 간편 로그인 사용 여부 (default: true)
     * @param prompts 인가 코드 요청 시, 추가 상호작용을 요청하려 할 때 사용.
     * @example "login": 다른 계정으로 로그인
     */
    authorize: (settings: {
      redirectURI?: string;
      state?: string;
      scope?: string;
      throughTalk?: boolean;
      prompts?: string;
    }) => unknown;

    autoLogin: (autoLoginParam: {}) => unknown;

    /**
     *  카카오 로그인 버튼을 생성합니다.
     *  @param container DOM Element 또는 Element의 ID Selector를 넘기면, 해당 Element 내부에 로그인 버튼이 생성됩니다.
     *  @param lang 로그인 버튼에 표시할 언어.
     *  @param size 로그인 버튼의 사이즈.
     */
    createLoginButton: (settings: {
      container: string | HTMLElement;
      lang?: "kr" | "en";
      size?: "small" | "medium" | "large";
      success?: (onSuccess: AuthSuccessCallback) => void;
      fail?: (onFail: AuthFailCallback) => void;
      always?: (onAlways: AuthSuccessCallback | AuthFailCallback) => void;
      scope?: string;
      persistAccessToken?: boolean;
      throughTalk?: boolean;
    }) => void;

    /**
     *
     * 사용자가 앱에 로그인할 수 있도록 로그인 팝업창을 띄우는 함수입니다. 사용자의 클릭 이벤트 이후에 호출되어야 브라우저에 의해 팝업이 차단되지 않습니다.
     *
     * @param success 로그인 성공 시 토큰을 받을 콜백
     * @param fail 로그인 실패 시 에러를 받을 콜백
     * @param always 결과에 상관없는 콜백
     * @param scope 추가 동의 받을 항목의 키
     * @param persistAccessToken 세션이 종료된 뒤에도 액세스 토큰을 사용할 수 있도록 로컬 스토리지에 저장합니다.
     * @param throughTalk 간편 로그인 사용 여부 (default: true)
     */
    login: (settings: {
      success?: (onSuccess: AuthSuccessCallback) => void;
      fail?: (onFail: AuthFailCallback) => void;
      always?: (onAlways: AuthSuccessCallback | AuthFailCallback) => void;
      scope?: string;
      persistAccessToken?: boolean;
      throughTalk?: boolean;
    }) => void;

    /**
     * 다른 계정으로 로그인할 수 있도록 로그인 팝업창을 띄우는 함수입니다. 사용자의 클릭 이벤트 이후에 호출되어야 브라우저에 의해 팝업이 차단되지 않습니다.
     *
     * @param success 로그인 성공 시 토큰을 받을 콜백
     * @param fail 로그인 실패 시 에러를 받을 콜백
     * @param always 결과에 상관없는 콜백
     * @param scope 추가 동의 받을 항목의 키
     * @param persistAccessToken 세션이 종료된 뒤에도 액세스 토큰을 사용할 수 있도록 로컬 스토리지에 저장합니다.
     */
    loginForm: (settings: {
      success?: (onSuccess: AuthSuccessCallback) => void;
      fail?: (onFail: AuthFailCallback) => void;
      always?: (onAlways: AuthSuccessCallback | AuthFailCallback) => void;
      scope?: string;
      persistAccessToken?: boolean;
    }) => void;

    /**
     * 현재 로그인되어 있는 사용자를 로그아웃시키고, Access Token을 삭제합니다.
     * @param onTokenExpired 토큰 만료 후 호출되는 콜백, 서비스의 로그아웃 로직을 수행하도록 구현해야 합니다.
     */
    logout: (onAfterTokenExpired?: () => void) => void;

    /**
     * 사용 중인 액세스 토큰
     */
    getAccessToken: () => string;
    /**
     * 사용 중인 App key
     */
    getAppKey: () => string;
    /**
     * 현재 로그인 상태를 반환
     */
    getStatusInfo: (callback?: AuthStatusCallback) => void;

    /**
     * API 호출 시 사용할 액세스 토큰을 설정합니다.
     *
     * 로그인을 완료하여 토큰 값이 서비스 서버로 전달되면, 서비스 서버에서 토큰을 받아 사용자 정보 가져오기 등 카카오 API를 호출할 때 사용할 수 있습니다.
     * 만약 로그인 이외의 카카오 API를 JavaScript SDK로 호출하려면 토큰 할당을 해야 합니다.
     *
     * @example
     * 로그인 이후 다음과 같이 Kakao.Auth.setAccessToken 함수를 통해 서버에서 발급받은 토큰을 할당해야 합니다.
     * 서비스 서버에서 로그인 응답을 통해 전달받은 액세스 토큰(Access Token) 값을 SDK에서 사용할 수 있도록 설정합니다.
     */
    setAccessToken: (accessToken: string, persist?: boolean) => void;
  };
};
