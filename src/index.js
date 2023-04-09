import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/05-movies">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
