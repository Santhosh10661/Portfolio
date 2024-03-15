import React, { useContext } from "react";
import "./Css/ProfileImage.css";
import img from "./svg/undraw_hello_re_3evm.svg";
import DataContext from "./ContextApi/DataContext";

function ProfileImg() {
  const { profileImg } = useContext(DataContext);

  console.log(profileImg);
  return (
    <div
      className={
        profileImg
          ? "ProfileImg col-11 col-sm-8 col-md-7 col-lg-6 col-xl-4"
          : "ProfileImg col-11 col-sm-8 col-md-7 col-lg-6 col-xl-4 ProfileImgClose"
      }
    >
      <img src={img} alt="" className="col-12 dropSha" />
    </div>
  );
}

export default ProfileImg;
