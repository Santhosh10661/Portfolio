import React from "react";
import { MdOutlineGpsFixed } from "react-icons/md";

function Describtion(props) {
  let { describtion } = props;

  return (
    <>
      {describtion.map((describe, index) => {
        return (
          <div
            className="col-12 d-flex justify-content-center my-2"
            key={index}
          >
            <MdOutlineGpsFixed className="tarketIcon fs-5 mx-1 " />
            <p className="col-11 col-sm-8 p-0">{describe}</p>
          </div>
        );
      })}
    </>
  );
}

export default Describtion;
