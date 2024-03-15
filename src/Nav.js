import React, { useContext } from "react";
import "./Css/Nav.css";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { RiLogoutCircleRLine } from "react-icons/ri";
import DataContext from "./ContextApi/DataContext";

function Nav() {
  const { setNewPageOpened, setProfileImg, menuBtnClicked, setmenuBtnClicked } =
    useContext(DataContext);

  let navTextClr = {
    width: "fit-content",
    color: "#ffffec",
    cursor: "pointer",
  };

  function handleClosePage() {
    setNewPageOpened(false);
    setTimeout(() => {
      setProfileImg(true);
    }, 1500);
  }
  return (
    <nav
      className="container-fluid navbar navbar-expand-lg shadow py-2 px-3"
      style={{
        position: "sticky",
        top: "0",
        zIndex: "3",
        backgroundColor: "#2c3333",
        height: "fit-content",
        borderRadius: "0 0 10px 10px",
      }}
    >
      <span style={navTextClr} onClick={() => handleClosePage()}>
        santhosh|portfolio
      </span>
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
      <div className="collapse navbar-collapse " id="navbarNavAltMarkup ">
        <div
          className="navbar-nav text-center d-flex align-items-center "
          style={{ width: "100%", position: "relative" }}
        >
          <a
            className="nav-link linkItem active"
            aria-current="page"
            href="#Education"
            style={navTextClr}
          >
            Education
          </a>

          <a
            className="nav-link linkItem "
            href="#Certification"
            style={navTextClr}
          >
            Certification
          </a>
          <a className="nav-link linkItem " href="#Project" style={navTextClr}>
            Project
          </a>
          <a className="nav-link linkItem " href="#Skill" style={navTextClr}>
            Skill
          </a>
          <a className="nav-link linkItem " href="#Contact" style={navTextClr}>
            Contact
          </a>
          <RiLogoutCircleRLine
            className="fs-5 logOutIcon my-2 my-md-0"
            style={{ color: "#ffffec" }}
            onClick={() => handleClosePage()}
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
