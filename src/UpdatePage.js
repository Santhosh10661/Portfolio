import React from "react";
import "./Css/UpdatePage.css";
import Education from "./Education";
import Certification from "./Certification";
import Project from "./Project";
import Nav from "./Nav";
import Skill from "./Skill";
import Footer from "./Footer";
import Contact from "./Contact";

function UpdatePage(props) {
  let { handleClosePage } = props;
  return (
    <div className="UpdatePage text-capitalize">
      <Nav handleClosePage={handleClosePage} />
      <Education />
      <Certification />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
}

export default UpdatePage;
