import React, { useState } from "react";
import UpdatePage from "./UpdatePage";
import Certification from "./Certification";

function ProImgCont(props) {
  let { newPageOpend, setNewPageOpened } = props;

  return (
    <>
      <div
        className={newPageOpend ? "circleCon p-2 openPage" : "circleCon p-2"}
        style={
          newPageOpend
            ? { width: "100px", height: "100px", transform: "scale(21)" }
            : { width: "100px", height: "100px", transform: "scale(8)" }
        }
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
      {newPageOpend && <UpdatePage setNewPageOpened={setNewPageOpened} />}
      {/* {newPageOpend && <Certification />} */}
    </>
  );
}

export default ProImgCont;
