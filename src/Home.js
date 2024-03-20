import React, { useContext, useEffect } from "react";
import "./Css/Home.css";
import ProImgCont from "./ProImgCont";
import { MdDoubleArrow } from "react-icons/md";
import { IoCloudDownloadSharp } from "react-icons/io5";
import resume from "./certificate/SANTHOSH_K_CV.pdf";
import ProfileImg from "./ProfileImg";
import DataContext from "./ContextApi/DataContext";
import RoleTypeWriter from "./RoleTypeWriter";

function Home() {
  const { newPageOpend, setNewPageOpened, setProfileImg, showImg, setShowImg } =
    useContext(DataContext);

  useEffect(() => {
    setTimeout(() => {
      setShowImg(true);
    }, 1500);
  }, []);

  function handleNewPage() {
    setProfileImg(false);
    setTimeout(() => {
      setNewPageOpened(true);
    }, 200);
  }
  return (
    <div className="Home row align-items-center">
      <ProImgCont />
      {showImg && <ProfileImg />}
      <div
        className={
          newPageOpend
            ? "col-12 col-md-7 col-lg-5 offset-md-4 offset-lg-6 nameCon nameConHide"
            : "col-12 col-md-7 col-lg-5 offset-md-4 offset-lg-6 nameCon"
        }
        style={{ zIndex: 1 }}
      >
        <h1 className="m-0">SANTHOSH KANNAN</h1>

        <RoleTypeWriter />

        <p className=" text-capitalize">
          As a recent MCA graduate, I've embraced frontend development with
          enthusiasm. With a keen eye for design and a solid technical
          foundation, I specialize in creating polished user interfaces. Eager
          to continually learn and innovate, I'm driven to deliver exceptional
          digital experiences.{" "}
          <a
            className="px-1 text-decoration-none fw-bold text-capitalize"
            href={resume}
            download="SANTHOSH_K_CV.pdf"
            type="application/pdf"
            style={{
              width: "fit-content",
              color: "#2EC1AC",
              textWrap: "nowrap",
            }}
          >
            Resume <IoCloudDownloadSharp className="fs-3" />
          </a>
        </p>

        <button
          className="col-6 col-sm-5 btn p-1 pt-2 s fw-bold text-capitalize"
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
