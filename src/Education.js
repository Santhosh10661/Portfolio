import React from "react";
import "./Css/Education.css";

function Education() {
  const education = [
    {
      id: 1,

      type: "post graduation",
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
      type: "under graduation",
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
    <div className="Education text-capitalize ">
      <h1 className="my-3 text-capitalize text-center">education</h1>
      <div className="row justify-content-center align-items-center">
        {/* <div className="col-12 d-flex flex-column flex-sm-row justify-content-center"> */}
        {education.map((edu) => {
          return (
            <div
              className="col-11 col-sm-4 d-flex flex-column justify-content-evenly my-4"
              key={edu.id}
            >
              <button
                className="col-6 btn mx-auto my-2"
                style={{ border: "1px solid #2c3333" }}
              >
                {edu.type}
              </button>
              <div className="shadow my-4 col-12 rounded" key={edu.id}>
                <h5 className="text-center bgBlack p-2">{edu.degree}</h5>
                <div className="p-3">
                  <p>course : {edu.course}</p>
                  <p>college : </p>
                  <div className="p-2">
                    <p>{edu.college}</p>
                    <p>
                      {edu.city} - {edu.pinode}
                    </p>
                  </div>
                  <p>duration : {edu.duration}</p>
                </div>
              </div>
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Education;
