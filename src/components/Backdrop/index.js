import React from "react";
import { Drop } from "./BackdropElements";

const Backdrop = (props) => {
  return <Drop onClick={props.onClick}></Drop>;
};

export default Backdrop;
