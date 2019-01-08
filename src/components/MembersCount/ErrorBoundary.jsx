import { Component } from "react";

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
      return "> 500";
    } else {
      return this.props.children;
    }
  }
}
