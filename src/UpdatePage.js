import React from "react";
import "./Css/UpdatePage.css";
import { Routes, Route, NavLink } from "react-router-dom";

import Education from "./Education";
import Certification from "./Certification";
import Project from "./Project";

function UpdatePage(props) {
  let { setNewPageOpened } = props;
  return (
    <main className="container-fluid UpdatePage">
      <header className="row shadow py-1 px-3" style={{ color: "#2c3333" }}>
        <div className="col-6">
          <p onClick={() => setNewPageOpened(false)}>
            {/* <NavLink to="/">santhosh</NavLink> */}
            sanna
          </p>
        </div>
        <nav className="col-6 d-flex align-items-center">
          <ul
            className="d-flex justify-content-between m-0 col-12"
            style={{ listStyle: "none" }}
          >
            <li>
              <NavLink to="/" className="links">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/Certification" className="links">
                Certification
              </NavLink>
            </li>
            <li>
              <NavLink to="/Project" className="links">
                Project
              </NavLink>
            </li>
            <li>
              <NavLink to="/Skill" className="links">
                Skill
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Education />} />
        <Route path="/Certification" element={<Certification />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Skill" element={<Education />} />
      </Routes>
    </main>
  );
}

export default UpdatePage;
