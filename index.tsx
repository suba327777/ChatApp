/* packages */
import React from "react";
import ReactDOM from "react-dom";
/* redux */
import { Provider } from "react-redux";
import { store } from "./src/store/store";
/* App */
import { App } from "./src/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);
