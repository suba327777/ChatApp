/* packages */
import React from "react";
import ReactDOM from "react-dom";
/* redux */
import { Provider } from "react-redux";
import { store } from "./src/store/store";
/* App */
import { App } from "./src/App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
