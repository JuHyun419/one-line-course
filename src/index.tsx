import "regenerator-runtime/runtime.js";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./hot-module";
import "./Ext";
import ReduxProvider from "./store";

// import AuthCtxProvider from "./context/AuthCtx";

import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider>
        <App />
      </ReduxProvider>
    </BrowserRouter>
    {/* <AuthCtxProvider>
    </AuthCtxProvider> */}
  </React.StrictMode>,
  document.querySelector(".root")
);
