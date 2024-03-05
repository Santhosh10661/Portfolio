import React from "react";

function Heading(props) {
  let { heading } = props;

  return (
    <div className="col-12 headingCon d-flex justify-content-center text-capitalize my-2">
      <h3 className="bgBlack heading m-0">{heading}</h3>
    </div>
  );
}

export default Heading;
