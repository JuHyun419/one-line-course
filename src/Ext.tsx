//
if (!Kakao?.isInitialized()) {
  Kakao?.init(process.env.KAKAO_OAUTH_CLIENT_ID);
  if (!Kakao.isInitialized()) {
    throw new Error("Kakao wasn't initialized!");
  }
}
