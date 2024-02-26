import React, { useState } from "react";
import ReactBasics from "./certificate/React Basics.jpg";
import ProgramminInJavascript from "./certificate/Programming In Javascript.jpg";
import IntroToFED from "./certificate/Introduction to Frontend Development.jpg";
import FoundationUX from "./certificate/Foundation Ux Design.jpg";
import OpenCertificateCon from "./OpenCertificateCon";
import "./Css/Certification.css";

function Certification() {
  let [openCertificate, setOpenCertificate] = useState(false);
  let [reqId, setReqId] = useState(null);
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
    setOpenCertificate(true);
    setReqId(openedId);
  };
  return (
    <div className="Certification text-capitalize">
      <h1 className="m-0 my-1 text-capitalize text-center">certification</h1>
      <div className="row justify-content-center " style={{ height: "100%" }}>
        <ul className="col-4 certiList p-0">
          {certificationList.map((certificate) => {
            return (
              <li
                className="listItem text-center py-2 my-2 "
                onClick={() => handleOpen(certificate.id)}
              >
                {certificate.title}
              </li>
            );
          })}
        </ul>

        <div className="col-8" style={{ transition: "0.3s ease" }}>
          <OpenCertificateCon
            reqId={reqId}
            certificationList={certificationList}
            openCertificate={openCertificate}
          />
        </div>
      </div>
    </div>
  );
}

export default Certification;
