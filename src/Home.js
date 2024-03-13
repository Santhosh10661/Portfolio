import React, { useEffect, useState } from "react";
import "./Css/Home.css";
import ProImgCont from "./ProImgCont";
import { MdDoubleArrow } from "react-icons/md";
import { IoCloudDownloadSharp } from "react-icons/io5";
import ProfileImg from "./ProfileImg";
import resume from "./certificate/SANTHOSH_K_CV.pdf";

function Home(props) {
  let { newPageOpend, handleNewPage, profileImg } = props;
  let [showImg, setShowImg] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowImg(true);
    }, 1500);
  }, []);
  return (
    <div className="Home row align-items-center">
      <ProImgCont newPageOpend={newPageOpend} />
      {showImg && <ProfileImg profileImg={profileImg} />}
      <div
        className={
          newPageOpend
            ? "col-12 col-md-7 col-lg-5 offset-md-4 offset-lg-6 nameCon nameConHide"
            : "col-12 col-md-7 col-lg-5 offset-md-4 offset-lg-6 nameCon"
        }
        style={{ zIndex: 1 }}
      >
        <h1 className="m-0 text-uppercase">SANTHOSH KANNAN</h1>
        <div className="col-12 d-flex align-items-center mb-2">
          <h4
            className=" fw-bolder p-2 m-0"
            style={{
              width: "fit-content",
              backgroundColor: "#ffffec",
              color: "#2c3333",
              borderRadius: "5px",
            }}
          >
            I am Frontend Developer
          </h4>

          <a
            href={resume}
            className="connectLink btn mx-3 p-0"
            download="SANTHOSH_K_CV.pdf"
            type="application/pdf"
            style={{
              border: "none",
              color: "#ffffec",
            }}
          >
            <IoCloudDownloadSharp className="fs-3" />
          </a>
        </div>
        <p className=" text-capitalize">
          As a recent MCA graduate, I've embraced frontend development with
          enthusiasm. With a keen eye for design and a solid technical
          foundation, I specialize in creating polished user interfaces. Eager
          to continually learn and innovate, I'm driven to deliver exceptional
          digital experiences.
        </p>
        <button
          className="col-6 col-sm-5  btn p-1 pt-2 s fw-bold text-capitalize"
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
