import "./globals.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import axios from "axios";
import { BACKEND_SERVER_URL } from "./constants/utils";

axios.defaults.baseURL = BACKEND_SERVER_URL;

// prettier-ignore
ReactDOM //
  .createRoot(document.getElementById("root"))
  .render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
