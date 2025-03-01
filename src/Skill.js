import React from "react";
import "./Css/Skill.css";
import ReactSvg from "./svg/react-js-icon.svg";
import HtmlSvg from "./svg/html-icon.svg";
import CssSvg from "./svg/css-icon.svg";
import ScssSvg from "./svg/scss.svg";
import BootstrapSvg from "./svg/bootstrap-5-logo-icon.svg";
import Tailwind from "./svg/tailwind.svg";
import JsSvg from "./svg/javascript-1.svg";
import Heading from "./commonContents/Heading";
import Describtion from "./commonContents/Describtion";

function Skill() {
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
    { id: 1, className: "Html", svg: HtmlSvg },
    { id: 2, className: "Css", svg: CssSvg },
    { id: 3, className: "Scss", svg: ScssSvg },
    { id: 4, className: "React", svg: ReactSvg },
    { id: 5, className: "Tailwind", svg: Tailwind },
    { id: 6, className: "Bootstrap", svg: BootstrapSvg },
    { id: 7, className: "Js", svg: JsSvg },
  ];

  return (
    <section className="container-fluid" id="Skill">
      <div className="row">
        <Heading heading={heading} />
        <Describtion describtion={describtion} />

        <div className="col-12 d-flex justify-content-center">
          <div
            className="col-6 col-sm-8 d-flex flex-wrap align-items-center justify-content-center shadow m-2 rounded p-3"
            style={{ backgroundColor: "#2c3333" }}
          >
            {skillList.map((skill) => {
              return (
                <div
                  className="col-6 col-sm-1 m-1 d-flex justify-content-center align-items-center rounded-circle p-3 skillCon"
                  key={skill.id}
                  style={{
                    backgroundColor: "#ffffec",
                    aspectRatio: "1/1",
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={skill.svg}
                    alt=""
                    className={`${skill.className} `}
                    style={{ width: "70%", height: "70%" }}
                  />
                  <div className="skillName bgBlack text-center p-1">
                    <p className="mb-1" style={{ fontSize: "12px" }}>
                      <small>{skill.className}</small>
                    </p>
                  </div>
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
