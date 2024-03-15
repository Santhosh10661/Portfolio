import React, { useContext } from "react";
import "./Css/ProImgCon.css";
import DataContext from "./ContextApi/DataContext";

function ProImgCont() {
  let { newPageOpend } = useContext(DataContext);
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
