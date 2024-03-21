import React from "react";
import "./Css/silder.css";

const LineSlide = (props) => {
  let { placement } = props;
  return <div className={`${placement} rounded`}></div>;
};

export default LineSlide;
