// import dotenv from "dotenv";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./hot-module";

// import AuthCtxProvider from "./context/AuthCtx";

import "./index.scss";

Kakao?.init(process.env.KAKAO_OAUTH_CLIENT_ID);
if (!Kakao.isInitialized()) {
  throw new Error("Kakao wasn't initialized!");
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <AuthCtxProvider>      
    </AuthCtxProvider> */}
  </React.StrictMode>,
  document.querySelector(".root")
);
