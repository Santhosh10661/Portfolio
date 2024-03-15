import React from "react";
import "./Css/UpdatePage.css";
import Education from "./Education";
import Certification from "./Certification";
import Project from "./Project";
import Nav from "./Nav";
import Skill from "./Skill";
import Footer from "./Footer";
import Contact from "./Contact";

function UpdatePage() {
  return (
    <div className="UpdatePage text-capitalize">
      <Nav />
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
