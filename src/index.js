import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { App } from "./components/App";
import { AskQuestion } from "./modals/AskQuestion";
import { Rehabilitation } from "./modals/Rehabilitation";
import { createStore } from "../src/redux/createStore";

import "bootstrap/dist/css/bootstrap.min.css";

const rootElement = document.getElementById("root");
const store = createStore();
const app = (
  <>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
      <AskQuestion />
      <Rehabilitation />
    </Provider>
  </>
);
ReactDOM.render(app, rootElement);
