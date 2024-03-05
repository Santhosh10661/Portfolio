import React from "react";
import "./Css/ProImgCon.css";

function ProImgCont(props) {
  let { newPageOpend } = props;
  return (
    <div
      className={newPageOpend ? "circleCon p-2 openPage" : "circleCon p-2"}
      style={{ width: "100px", height: "100px" }}
    >
      <div
        className="circle"
        style={{
          width: "90%",
          height: "90%",
          backgroundColor: "#ffffec",
          borderRadius: "50%",
        }}
      ></div>
    </div>
  );
}

export default ProImgCont;
