import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="shake wrapper">{props.children}</div>;
}

export default Wrapper;