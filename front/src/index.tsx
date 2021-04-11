import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.scss";

import "./hot-module";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.querySelector(".root")
);
