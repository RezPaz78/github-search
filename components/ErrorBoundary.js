import React from "react";
import Error from "./Error";

const ErrorBoundary = (props) =>
  props.message ? (
    <Error message={props.message} />
  ) : (
    React.cloneElement(props.children, { ...props })
  );

export default ErrorBoundary;
