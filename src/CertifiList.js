import React from "react";

function CertifiList(props) {
  let { certificationList, handleOpen, reqId } = props;

  let listconstyle = {
    overflow: "hidden",
    transition: "0.3s ease",
  };
  return (
    <nav className="col-12 col-md-5 col-lg-12 bgBlack p-2 rounded ">
      <ul className="p-0 m-0" style={listconstyle}>
        {certificationList.map((certificate) => {
          return (
            <li
              key={certificate.id}
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
