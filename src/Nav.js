import React, { useState } from "react";
import "./Css/Nav.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";

function Nav(props) {
  let { handleClosePage } = props;
  let navTextClr = { color: "#ffffec" };
  let [menuBtnClicked, setmenuBtnClicked] = useState(false);
  return (
    <nav
      className="container-fluid navbar navbar-expand-lg shadow py-1 px-3 "
      style={{
        position: "sticky",
        top: "0",
        zIndex: "2",
        backgroundColor: "#2c3333",
        height: "fit-content",
        borderRadius: "0 0 10px 10px",
      }}
    >
      <a className="navbar-brand" href="/" style={navTextClr}>
        portfolio
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={{ border: "none", outline: "none", boxShadow: "none" }}
        onClick={() => setmenuBtnClicked(!menuBtnClicked)}
      >
        {menuBtnClicked ? (
          <IoClose style={navTextClr} />
        ) : (
          <HiOutlineMenuAlt3 style={navTextClr} />
        )}
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div
          className="navbar-nav text-center"
          style={{ width: "100%", position: "relative" }}
        >
          <a
            className="nav-link active"
            aria-current="page"
            href="#Education"
            style={navTextClr}
          >
            Education
          </a>
          <a className="nav-link " href="#Certification" style={navTextClr}>
            Certification
          </a>
          <a className="nav-link " href="#Project" style={navTextClr}>
            Project
          </a>
          <a className="nav-link " href="#Skill" style={navTextClr}>
            Skill
          </a>
          <a className="nav-link " href="#Contact" style={navTextClr}>
            Contact
          </a>
          <p className="text-end nav-link m-0">
            <RiLogoutCircleRLine
              className="fs-4 logOutIcon"
              style={navTextClr}
              onClick={() => handleClosePage()}
            />
          </p>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
