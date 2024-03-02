import React from "react";
import "./Css/Education.css";
import EduSvg from "./svg/undraw_graduation_re_gthn (1).svg";
import { MdOutlineGpsFixed } from "react-icons/md";
import Edubox from "./Edubox";

function Education() {
  const education = [
    {
      id: 1,
      degree: "master's degree",
      course: "computer application (mca)",
      college: "mass college of arts and science",
      city: "kumbakonam - 612501",
      university: "bharathidasan university",
      percentage: 70,
      duration: "jun 2021 - jun 2023",
    },
    {
      id: 2,
      degree: "bachelor degree",
      course: " computer science (bsc.cs)",
      college: "swami dayanandha college of arts and science ",
      city: "thiruvarur - 612610",
      university: "bharathidasan university",
      percentage: 70,
      duration: "jun 2018 - jun 2021",
    },
  ];
  // className=" m-0 my-2  px-3 py-2"
  return (
    <section className="container-fluid Education" id="Education">
      <div className="row justify-content-center">
        <div className="col-12 headingCon d-flex justify-content-center text-capitalize my-2">
          <h3 className="bgBlack heading m-0">education</h3>
        </div>

        <div className="col-12 d-flex justify-content-center my-2">
          <MdOutlineGpsFixed className="tarketIcon fs-5 mx-1 " />
          <p className="col-11 col-sm-8 p-0">
            I completed my secondary education in government higher secondary
            school in 2018. Following this, I pursued my undergraduate studies
            at Bharathidasan University, where I obtained my Bachelor's degree.
            Subsequently, I furthered my education with a postgraduate degree
            from the same institution.
          </p>
        </div>
        {/* <p className="col-11 col-sm-8 my-2 p-0">
          I completed my secondary education in government higher secondary
          school in 2018. Following this, I pursued my undergraduate studies at
          Bharathidasan University, where I obtained my Bachelor's degree.
          Subsequently, I furthered my education with a postgraduate degree from
          the same institution.
        </p> */}
        <div className="col-11 d-flex justify-content-center">
          <img src={EduSvg} alt="" className="col-12 col-sm-8" />
        </div>
        <Edubox education={education} />
      </div>
    </section>
  );
}

export default Education;
