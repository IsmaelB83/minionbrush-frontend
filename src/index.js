// NPM Modules
import React from "react";
import ReactDOM from "react-dom";
import { SnackbarProvider } from "notistack";
// Material UI
// Components
import App from "./containers/App";
// Own modules
import './utils/i18n';
// Assets
// CSS
import "./index.css";

// Render
const reactComp = (
  <SnackbarProvider maxSnack={1} autoHideDuration={1000}>
    <App />
  </SnackbarProvider>
);

ReactDOM.render(reactComp, document.querySelector("#root"));
