import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./hot-module";

import AuthCtxProvider from "./context/auth/AuthCtx";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <AuthCtxProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthCtxProvider>
  </React.StrictMode>,
  document.querySelector(".root")
);
