import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";

import App from "./components/App";
import theme from "./components/themes";
import GlobalStyle from "./components/themes/GlobalStyle";
import * as serviceWorkerRegistration from "./serviceWorker/serviceWorkerRegistration";

const root = document.getElementById("root");
const renderApp = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
);
ReactDOM.render(renderApp(), root);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    require("./components/App");
    ReactDOM.render(renderApp(), root);
  });
}

serviceWorkerRegistration.unregister();
