import React from "react";
import "./Css/UpdatePage.css";
import Education from "./Education";
import Certification from "./Certification";
import Project from "./Project";
import Nav from "./Nav";
import Skill from "./Skill";
import Footer from "./Footer";

function UpdatePage(props) {
  let { setNewPageOpened } = props;
  return (
    <div className="UpdatePage text-capitalize">
      <Nav setNewPageOpened={setNewPageOpened} />
      <Education />
      <Certification />
      <Project />
      <Skill />
      <Footer />
    </div>
  );
}

export default UpdatePage;
