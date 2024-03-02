import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";

function Edubox(props) {
  let { education } = props;
  return (
    <div className=" col-12 my-3">
      <div className="row justify-content-center align-items-center">
        {education.map((edu) => {
          return (
            <div
              className="col-11 col-sm-5 d-flex flex-column justify-content-evenly my-2 "
              key={edu.id}
            >
              <div className="shadow  col-12 rounded" key={edu.id}>
                <h5 className="text-center bgBlack p-2 position-relative">
                  {edu.degree} <LiaCertificateSolid className="fs-3" />
                </h5>
                <ul style={{ listStyle: "disc" }}>
                  <li className="my-2 p-2">{edu.course}</li>
                  <li className="my-2 p-2">
                    {edu.college}
                    <p className="m-0">{edu.city}</p>
                  </li>
                  <li className="my-2 p-2">{edu.university}</li>
                  <li className="my-2 p-2">{edu.percentage}%</li>
                  <li className="my-2 p-2">{edu.duration}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Edubox;
