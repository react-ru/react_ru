import React, { Component } from "react";
import { Alert } from "reactstrap";

export class ErrorBoundary extends Component {
  componentDidCatch(error) {
    console.error(error);
  }

  static getDerivedStateFromError(error) {
    return {
      error
    };
  }

  render() {
    if (this.state && this.state.error) {
      return <Alert color="danger">{this.state.error.stack}</Alert>;
    } else {
      return this.props.children;
    }
  }
}
