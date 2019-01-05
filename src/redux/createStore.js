import { createStore as baseCreateStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import modal from "./reducers/modal";
import form from "./reducers/form";

export const createStore = () => {
  const reducer = combineReducers({
    modal,
    form
  });
  return baseCreateStore(reducer, composeWithDevTools());
};
