import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function CertifiList(props) {
  let { certificationList, handleOpen, listShow, setListShow, reqId } = props;

  let listconstyle = {
    height: "200px",
    overflow: "hidden",
    transition: "0.3s ease",
  };
  return (
    <nav className="col-11 certiListCon my-2 p-2 rounded ">
      <ul className="p-0 m-0" style={listconstyle}>
        {certificationList.map((certificate) => {
          return (
            <li
              className={
                reqId === certificate.id
                  ? "listItem text-center py-2 my-2 listItemActive"
                  : "listItem text-center py-2 my-2 "
              }
              onClick={() => handleOpen(certificate.id)}
            >
              {certificate.title}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default CertifiList;
