import React from "react";
import "./Css/UpdatePage.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Education from "./Education";
import Certification from "./Certification";
import Project from "./Project";
import Nav from "./Nav";
import Skill from "./Skill";
import Footer from "./Footer";

function UpdatePage(props) {
  return (
    <div className="UpdatePage text-capitalize">
      <Nav />
      <Education />
      <Certification />
      <Project />
      <Skill />
      <Footer />
    </div>
  );
}

export default UpdatePage;
