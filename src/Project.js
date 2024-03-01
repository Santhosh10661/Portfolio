import React from "react";
import "./Css/Project.css";
import { FaArrowTrendUp } from "react-icons/fa6";
import projectList from "./projectList";
import ProjectImg from "./ProjectImg";

function Project() {
  return (
    <div className="Project" id="Project">
      <div className="row justify-content-center">
        <h1
          className="col-12 m-0 my-1 text-capitalize text-center"
          style={{ height: "fit-content" }}
        >
          project
        </h1>
        {projectList.map((pro) => {
          return (
            <div className="col-11 col-sm-4 p-0 my-2" key={pro.id}>
              <div
                className="card p-3"
                style={{ background: "#2c3333", color: "#ffffec" }}
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
  );
}

export default Project;
