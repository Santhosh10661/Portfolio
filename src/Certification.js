import React, { useState } from "react";
import "./Css/Certification.css";
import ReactBasics from "./certificate/React Basics.jpg";
import ProgramminInJavascript from "./certificate/Programming In Javascript.jpg";
import IntroToFED from "./certificate/Introduction to Frontend Development.jpg";
import FoundationUX from "./certificate/Foundation Ux Design.jpg";
import OpenCertificateCon from "./OpenCertificateCon";
import certifiSvg from "./svg/undraw_certificate_re_yadi.svg";
import Heading from "./commonContents/Heading";
import Describtion from "./commonContents/Describtion";

function Certification() {
  let heading = "certification";
  let describtion = [
    ` In addition to my formal education, I have also completed several
  certificate courses to further enhance my skills and expertise.
  These courses cover a range of topics relevant to my field of
  interest and professional development, providing me with valuable
  knowledge and practical experience.`,
  ];
  let [reqId, setReqId] = useState(1);
  let certificationList = [
    {
      id: 1,
      img: ReactBasics,
      title: "react basics",
      issuedBy: "Coursera",
      completionDate: "January 23, 2024",
      grade: 100,
      link: "https://www.coursera.org/account/accomplishments/verify/N8GZUZ853QR6?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
    },
    {
      id: 2,
      img: ProgramminInJavascript,
      title: "programming in javascript",
      issuedBy: "Coursera",
      completionDate: "November 15, 2023",
      grade: 97.06,
      link: "https://coursera.org/share/03bbc688a769f4f23e1212b53a07531d",
    },
    {
      id: 3,
      img: IntroToFED,
      title: "intro to frontend developmet",
      issuedBy: "Coursera",
      completionDate: "September 19, 2023",
      grade: 98,
      link: "https://coursera.org/share/608f3dcb6a1ef57abdbd40f910b1a77b",
    },
    {
      id: 4,
      img: FoundationUX,
      title: "Foundations of UX Design",
      issuedBy: "Coursera",
      completionDate: "July 24, 2023",
      grade: 84.69,
      link: "https://www.coursera.org/account/accomplishments/verify/NAUDV39K5ZZ3?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Dcourse",
    },
  ];

  const handleOpen = (openedId) => {
    setReqId(openedId);
  };
  return (
    <section className="container-fluid Certification" id="Certification">
      <div className="row justify-content-center">
        <Heading heading={heading} />
        <Describtion describtion={describtion} />

        <div className="col-11 col-sm-6 d-flex justify-content-center">
          <img src={certifiSvg} alt="" className="col-6 col-sm-4 dropSha" />
        </div>
        <div
          className="col-11 col-sm-10 shadow rounded mb-3"
          style={{ height: "100%" }}
        >
          <div className="row justify-content-center ">
            <div
              className="col-12 d-flex align-items-center justify-content-center flex-wrap p-2"
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
