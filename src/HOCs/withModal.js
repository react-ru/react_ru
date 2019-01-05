import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { get } from "lodash";
import { bindActionCreators } from "redux";
import { toggle } from "../redux/reducers/modal";

export const withModal = name => WrappedComponent => {
  const stateMapper = createStructuredSelector({
    isOpen: state => {
      return get(state, ["modal", name, "open"], false);
    }
  });

  const dispatchMapper = dispatch =>
    bindActionCreators(
      {
        toggle: () => toggle(name)
      },
      dispatch
    );

  return connect(
    stateMapper,
    dispatchMapper
  )(WrappedComponent);
};
