import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorkerRegistration from './serviceWorker/serviceWorkerRegistration';

const root = document.getElementById("root");
const renderApp = () => (
  <>
    <App />
  </>
);
ReactDOM.render(renderApp(), root);

if (module.hot) {
  module.hot.accept("./components/App", () => {
    require("./components/App");
    ReactDOM.render(renderApp(), root);
  });
}

serviceWorkerRegistration.unregister();
