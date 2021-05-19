import "regenerator-runtime/runtime.js";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./hot-module";
import "./Ext";

import ReduxProvider from "./store";
import { DarkModeCtxProvider } from "./context/DarkModeCtx";

// import AuthCtxProvider from "./context/AuthCtx";

import "./index.scss";
import { AuthCtxProvider } from "./context/AuthCtx";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeCtxProvider>
        <AuthCtxProvider>
          <ReduxProvider>
            <App />
          </ReduxProvider>
        </AuthCtxProvider>
      </DarkModeCtxProvider>
    </BrowserRouter>
    {/* <AuthCtxProvider>
    </AuthCtxProvider> */}
  </React.StrictMode>,
  document.querySelector(".root")
);
