import React from "react";
import { Switch, Route } from "react-router";
import { Main } from "../pages/Main";

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  );
};
