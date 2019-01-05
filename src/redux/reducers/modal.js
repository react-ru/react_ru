import { createActions, handleActions } from "redux-actions";
import { get } from "lodash";

const defaultState = {};

export const { toggle } = createActions({
  TOGGLE: name => {
    return {
      name
    };
  }
});

export default handleActions(
  {
    [toggle]: (state, { payload: { name } }) => {
      return {
        ...state,
        [name]: {
          open: !get(state, [name, "open"], false)
        }
      };
    }
  },
  defaultState
);
