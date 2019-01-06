import React from "react";
import { Switch, Route } from "react-router";
import { Main } from "../pages/Main";
import { NotFound } from "../pages/NotFound";

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};
