import React from "react";
import "./Css/Project.css";
import { FaArrowTrendUp } from "react-icons/fa6";
import projectSvg from "./svg/undraw_feeling_proud_qne1.svg";
import projectList from "./projectList";
import ProjectImg from "./ProjectImg";
import Heading from "./commonContents/Heading";
import Describtion from "./commonContents/Describtion";

function Project() {
  let heading = "project";
  let describtion = [
    ` Following the completion of my certificate courses, I delved into
  self-initiated projects to consolidate my learning and broaden my
  skill set. These projects were designed to integrate the knowledge
  acquired from my coursework with additional resources, allowing me
  to explore diverse applications and refine my abilities. Through
  hands-on practice and experimentation, I gained valuable practical
  experience and furthered my expertise in frontend development`,
  ];
  return (
    <section className="container-fluid Project" id="Project">
      <div className="row justify-content-center">
        <Heading heading={heading} />

        <Describtion describtion={describtion} />
        <div className="col-11 d-flex justify-content-center">
          <img src={projectSvg} alt="" className="col-8 col-sm-3" />
        </div>
        <div className="col-12">
          <div className="row justify-content-around">
            {projectList.map((pro) => {
              return (
                <div className="col-11 col-md-5 col-lg-3 p-0 mb-3" key={pro.id}>
                  <div
                    className="card shadow-lg p-2"
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
                      <h3 className="card-title">{pro.title}</h3>
                      <p className="card-text">{pro.shortNote}</p>
                      <a
                        href={pro.link}
                        className="btn btn-primary mt-1"
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
    </section>
  );
}

export default Project;
