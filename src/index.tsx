import "regenerator-runtime/runtime.js";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./hot-module";
import "./Ext";

import ReduxProvider from "./store";
import { DarkModeCtxProvider } from "./context/DarkModeCtx";
import { ViewModeCtxProvider } from "./context/ViewModeCtx";

// import AuthCtxProvider from "./context/AuthCtx";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeCtxProvider>
        <ViewModeCtxProvider>
          <ReduxProvider>
            <App />
          </ReduxProvider>
        </ViewModeCtxProvider>
      </DarkModeCtxProvider>
    </BrowserRouter>
    {/* <AuthCtxProvider>
    </AuthCtxProvider> */}
  </React.StrictMode>,
  document.querySelector(".root")
);
