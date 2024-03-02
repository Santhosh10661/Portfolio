import React, { useState } from "react";
import ReactBasics from "./certificate/React Basics.jpg";
import ProgramminInJavascript from "./certificate/Programming In Javascript.jpg";
import IntroToFED from "./certificate/Introduction to Frontend Development.jpg";
import FoundationUX from "./certificate/Foundation Ux Design.jpg";
import OpenCertificateCon from "./OpenCertificateCon";
import { MdOutlineGpsFixed } from "react-icons/md";
import certifiSvg from "./svg/undraw_certificate_re_yadi.svg";

import "./Css/Certification.css";
// import CertifiList from "./CertifiList";

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
      title: "intro to frontend developmet",
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
      <div className="row justify-content-center">
        <div className="col-12 headingCon d-flex justify-content-center text-capitalize my-2">
          <h3 className="bgBlack heading m-0">certification</h3>
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
        <div className="col-11 col-sm-6 d-flex justify-content-center">
          <img src={certifiSvg} alt="" className="col-6 col-sm-4" />
        </div>

        <div
          className="col-11 col-sm-10 certifiInfoCon rounded"
          style={{ height: "100%" }}
        >
          <div className="row justify-content-center ">
            <div
              className="col-12 d-flex align-items-center justify-content-center flex-wrap p-0"
              style={{ transition: "0.3s ease" }}
            >
              <OpenCertificateCon
                reqId={reqId}
                certificationList={certificationList}
                handleOpen={handleOpen}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certification;
