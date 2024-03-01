import React from "react";
import "./Css/Education.css";

import { LiaCertificateSolid } from "react-icons/lia";
import { GiNotebook } from "react-icons/gi";
import { MdLocationCity } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa6";
import { GrCertificate } from "react-icons/gr";

function Education() {
  const education = [
    {
      id: 1,
      degree: "master's degree",
      course: "computer application (mca)",
      college: "mass college of arts and science",
      university: "bharathidasan university",
      city: "kumbakonam",
      pinode: 612501,
      duration: "jun 2021 - jun 2023",
    },
    {
      id: 2,
      degree: "bachelor degree",
      course: " computer science (bsc.cs)",
      college: "swami dayanandha college of arts and science",
      university: "bharathidasan university",
      city: "thiruvarur",
      pinode: 612610,
      duration: "jun 2018 - jun 2021",
    },
  ];

  return (
    <section className="container-fluid Education" id="Education">
      <div className="row">
        <h1 className=" col-12 text-capitalize text-center m-0 my-2">
          education
        </h1>
        <div className=" col-12 ">
          <div className="row justify-content-center align-items-center">
            {education.map((edu) => {
              return (
                <div
                  className="col-11 col-sm-4 d-flex flex-column justify-content-evenly p-2"
                  key={edu.id}
                >
                  <div className="shadow my-4 col-12 rounded" key={edu.id}>
                    <h5 className="text-center bgBlack p-2 position-relative">
                      {edu.degree} <LiaCertificateSolid className="fs-2" />
                    </h5>
                    <div className="p-3">
                      <div className="d-flex align-items-center">
                        <h1>
                          <GiNotebook />
                        </h1>
                        <p className="m-0"> {edu.course}</p>
                      </div>

                      <div className="d-flex">
                        <h1>
                          <MdLocationCity />
                        </h1>
                        <p>
                          {edu.college} {edu.city} - {edu.pinode}
                        </p>
                      </div>
                      <p>duration : {edu.duration}</p>
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

export default Education;
