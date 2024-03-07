import React from "react";
import "./Css/ProfileImage.css";
// import img from "./svg/undraw_feeling_proud_qne1.svg";
// import img from "./svg/undraw_code_thinking_re_gka2 (1).svg";
import img from "./svg/undraw_welcoming_re_x0qo.svg";
function ProfileImg(props) {
  let { profileImg } = props;
  return (
    <div
      className={
        profileImg
          ? "ProfileImg col-10 col-sm-8 col-md-5 col-lg-4"
          : "ProfileImg col-10 col-sm-8 col-md-5 col-lg-4  ProfileImgClose"
      }
    >
      <img src={img} alt="" className="col-12 dropSha" />
    </div>
  );
}

export default ProfileImg;
