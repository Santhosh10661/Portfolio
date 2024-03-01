import React from "react";
import "./Css/UpdatePage.css";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import Education from "./Education";
import Certification from "./Certification";
import Project from "./Project";
import Nav from "./Nav";

function UpdatePage(props) {
  // let { setNewPageOpened } = props;
  return (
    <div className="container-fluid UpdatePage ">
      <div className="row text-capitalize">
        <Nav />
        <Education />
        <Certification />
        <Project />
      </div>
    </div>
  );
}

export default UpdatePage;
