import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "mobx-react";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider {...store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
