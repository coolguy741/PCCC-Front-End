import * as React from "react";

export interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  State
> {
  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public state: Readonly<State> = {
    hasError: false,
  };

  public render() {
    const { children } = this.props;
    const { hasError } = this.state;
    return hasError ? <h1>An error has occured.</h1> : <>{children}</>;
  }
}
