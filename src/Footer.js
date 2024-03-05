import React from "react";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";

function Footer() {
  let connectionList = [
    {
      id: 1,
      tag: <BsLinkedin />,
      link: "https://www.linkedin.com/in/santhosh-kannan-6108b7239/",
    },
    { id: 2, tag: <BsGithub />, link: "https://github.com/Santhosh10661" },
    { id: 3, tag: <IoIosMail />, link: "mailto:santhosh10661@gmail.com" },
  ];
  return (
    <footer
      className="container-fluid bgBlack p-2"
      style={{ borderRadius: "10px 10px 0 0" }}
    >
      <div className="row m-0">
        <div className="col-12 p-0">
          {connectionList.map((connect) => {
            return (
              <button
                type="button"
                className="btn p-0"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip on top"
                key={connect.id}
              >
                <a
                  href={connect.link}
                  target="black"
                  className="btn connectLink"
                  style={{ color: "#ffffec", boxShadow: "none" }}
                  key={connect.id}
                >
                  {connect.tag}
                </a>
              </button>
            );
          })}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
