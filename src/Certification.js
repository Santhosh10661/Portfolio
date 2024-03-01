import React, { useState } from "react";
import ReactBasics from "./certificate/React Basics.jpg";
import ProgramminInJavascript from "./certificate/Programming In Javascript.jpg";
import IntroToFED from "./certificate/Introduction to Frontend Development.jpg";
import FoundationUX from "./certificate/Foundation Ux Design.jpg";
import OpenCertificateCon from "./OpenCertificateCon";

import "./Css/Certification.css";
import CertifiList from "./CertifiList";

function Certification() {
  let [reqId, setReqId] = useState(1);
  let certificationList = [
    {
      id: 1,
      img: ReactBasics,
      title: "react basics",
      issuedBy: "Coursera",
      completionDate: "January 23, 2024",
      grade: 100,
    },
    {
      id: 2,
      img: ProgramminInJavascript,
      title: "programming in javascript",
      issuedBy: "Coursera",
      completionDate: "November 15, 2023",
      grade: 97.06,
    },
    {
      id: 3,
      img: IntroToFED,
      title: "introduction to frontend developmet",
      issuedBy: "Coursera",
      completionDate: "September 19, 2023",
      grade: 98,
    },
    {
      id: 4,
      img: FoundationUX,
      title: "Foundations of UX Design",
      issuedBy: "Coursera",
      completionDate: "July 24, 2023",
      grade: 84.69,
    },
  ];

  const handleOpen = (openedId) => {
    setReqId(openedId);
  };
  return (
    <section className="container-fluid Certification" id="Certification">
      <div className="">
        <h1
          className="col-12 m-0 my-1 text-capitalize text-center"
          style={{ height: "fit-content" }}
        >
          certification
        </h1>
        <div className="col-12 my-auto" style={{ height: "100%" }}>
          <div className="row justify-content-center p-1 ">
            <CertifiList
              certificationList={certificationList}
              handleOpen={handleOpen}
              reqId={reqId}
            />
            <div
              className="col-11 d-flex flex-wrap p-0"
              style={{ transition: "0.3s ease" }}
            >
              <OpenCertificateCon
                reqId={reqId}
                certificationList={certificationList}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certification;
