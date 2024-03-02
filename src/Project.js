import React from "react";
import "./Css/Project.css";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdOutlineGpsFixed } from "react-icons/md";
// import projectSvg from "./svg/undraw_programming_re_kg9v.svg";
import projectSvg from "./svg/undraw_feeling_proud_qne1.svg";
// import projectSvg from "./svg/undraw_code_thinking_re_gka2.svg";
import projectList from "./projectList";
import ProjectImg from "./ProjectImg";

function Project() {
  return (
    <div className="container-fluid Project" id="Project">
      <div className="row justify-content-center">
        <div className="col-12 headingCon d-flex justify-content-center text-capitalize my-2">
          <h3 className="bgBlack heading m-0">project</h3>
        </div>

        <div className="col-12 d-flex justify-content-center my-2">
          <MdOutlineGpsFixed className="tarketIcon fs-5 mx-1 " />
          <p className="col-11 col-sm-8  p-0">
            In addition to my formal education, I have also completed several
            certificate courses to further enhance my skills and expertise.
            These courses cover a range of topics relevant to my field of
            interest and professional development, providing me with valuable
            knowledge and practical experience.
          </p>
        </div>
        <div className="col-11 d-flex justify-content-center">
          <img src={projectSvg} alt="" className="col-8 col-sm-3" />
        </div>
        <div className="col-12">
          <div className="row justify-content-around">
            {projectList.map((pro) => {
              return (
                <div className="col-11 col-sm-3  p-0 mb-2" key={pro.id}>
                  <div
                    className="card p-3"
                    style={{
                      background: "#2c3333",
                      color: "#ffffec",
                      height: "100%",
                    }}
                  >
                    <div className="col-12 d-flex overflow-hidden card-img">
                      <ProjectImg pro={pro} />
                    </div>

                    <div className="card-body p-0 mt-3">
                      <h3 class="card-title">{pro.title}</h3>
                      <p className="card-text">{pro.shortNote}</p>
                      <a
                        href={pro.link}
                        class="btn btn-primary mt-1"
                        target="blank"
                        // style={{ background: "#ffffec", color: "#2c3333" }}
                      >
                        try now <FaArrowTrendUp className="mb-2" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
