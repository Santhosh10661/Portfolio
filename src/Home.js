import React, { useEffect, useState } from "react";
import ProImgCont from "./ProImgCont";
import { MdDoubleArrow } from "react-icons/md";

import "./Css/Home.css";

function Home() {
  let [newPageOpend, setNewPageOpened] = useState(false);

  function handleNewPage() {
    setNewPageOpened(true);
  }
  return (
    <div className="Home row  align-items-center ">
      <ProImgCont
        newPageOpend={newPageOpend}
        setNewPageOpened={setNewPageOpened}
      />
      <div
        className={
          newPageOpend
            ? "col-10 col-sm-5 offset-sm-5 nameCon nameConHide"
            : "col-10 col-sm-5 offset-sm-5 nameCon"
        }
        style={{ zIndex: 1 }}
      >
        <h1 className="m-0 text-uppercase">SANTHOSH KANNAN</h1>
        <h4
          className=" fw-bolder text-capitalize p-2"
          style={{
            width: "fit-content",
            backgroundColor: "#ffffec",
            color: "#2c3333",
            borderRadius: "5px",
          }}
        >
          i am a frontend developer
        </h4>
        <p className=" text-capitalize">
          A frontend developer specializes in building the user interface of
          websites or web applications using HTML, CSS, and JavaScript. They
          focus on creating responsive, visually appealing interfaces that
          enhance user experience across devices and browsers.
        </p>
        <button
          className="col-4 btn p-1 pt-2 s fw-bold text-capitalize"
          style={{
            backgroundColor: "#ffffec",
            color: "#2c3333",
            borderRadius: "50px",
          }}
          onClick={() => handleNewPage()}
        >
          <MdDoubleArrow className="mb-1 letGoArrowL" />
          -lets go-
          <MdDoubleArrow className="mb-1 letGoArrowR" />
        </button>
      </div>
    </div>
  );
}

export default Home;
