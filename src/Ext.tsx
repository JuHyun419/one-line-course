// Kakao cdn init
if (!Kakao?.isInitialized()) {
  Kakao?.init(process.env.KAKAO_OAUTH_CLIENT_ID);
}
