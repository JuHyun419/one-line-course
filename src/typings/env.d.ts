declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: "dev" | "prod" | "test";
    GOOGLE_OAUTH_CLIENT_ID: string;
    GOOGLE_OAUTH_CLIENT_SECRET: string;
    KAKAO_OAUTH_CLIENT_ID: string;
    UNSPLASH_ACCESS_KEY: string;
    UNSPLASH_SECRET: string;
  }
}
