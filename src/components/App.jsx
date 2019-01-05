import React from "react";
import { Switch, Route } from "react-router";
import { Main } from "../pages/Main";
// import { CodeReview } from '../pages/CodeReview';
import { NotFound } from '../pages/NotFound';

export const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route exact path="/code-review" component={CodeReview} /> */}
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};
