import React, { useEffect, useState } from "react";
import "./Css/Skill.css";
import ReactSvg from "./svg/react-js-icon.svg";
import HtmlSvg from "./svg/html-icon.svg";
import CssSvg from "./svg/css-icon.svg";
import BootstrapSvg from "./svg/bootstrap-5-logo-icon.svg";
import JsSvg from "./svg/javascript-1.svg";
import Heading from "./commonContents/Heading";
import Describtion from "./commonContents/Describtion";

function Skill() {
  let [skillAlign, setSkillAlign] = useState("row");

  let heading = "skills";
  let describtion = [
    `Upon completing my certificate courses, I acquired essential skills in
  frontend development, mastering important technologies vital to
  creating captivating user interfaces. These include proficiency in
  HTML, CSS, JavaScript, and other cutting-edge frameworks and
  libraries. These foundational skills empower me to craft engaging and
  responsive web experiences, ensuring optimal user engagement and
  satisfaction.`,
  ];
  let skillList = [
    { id: 1, className: "HtmlSvg", svg: HtmlSvg },
    { id: 2, className: "CssSvg", svg: CssSvg },
    { id: 3, className: "ReactSvg", svg: ReactSvg },
    { id: 4, className: "BootstrapSvg", svg: BootstrapSvg },
    { id: 5, className: "JsSvg", svg: JsSvg },
  ];
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     // let date = new Date();
  //     setSkillAlign((prevDirection) =>
  //       prevDirection === "row" ? "row-reverse" : "row"
  //     );
  //     // console.log(date);
  //   }, 2200);
  // }, []);

  return (
    <section className="container-fluid" id="Skill">
      <div className="row">
        <Heading heading={heading} />
        <Describtion describtion={describtion} />

        <div className="col-12 d-flex justify-content-center">
          <div
            className="col-6 col-sm-8 d-flex flex-wrap align-items-center justify-content-center shadow m-2 rounded p-3"
            style={{ backgroundColor: "#2c3333", flexDirection: skillAlign }}
          >
            {skillList.map((skill) => {
              return (
                <div
                  className="col-6 col-sm-1 m-1 d-flex justify-content-center align-items-center rounded-circle p-3"
                  key={skill.id}
                  style={{
                    backgroundColor: "#ffffec",
                    aspectRatio: "1/1",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={skill.svg}
                    alt=""
                    className={`${skill.className} `}
                    style={{ width: "70%", height: "70%" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
