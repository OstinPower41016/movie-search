import * as React from "react";

import "./container.scss";
interface IContainerProps {}

const Container: React.FunctionComponent<IContainerProps> = (props) => {
  return <div className="container">{props.children}</div>;
};

export default Container;
