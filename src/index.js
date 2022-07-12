import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import GlobalStyle from "./style";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>
);

// ReactDOM.render(
// <React.Fragment>
//   <GlobalStyle />
//   {/* <GlobalConfont /> */}
//   <App />
// </React.Fragment>,

//   document.getElementById("root")
// );
