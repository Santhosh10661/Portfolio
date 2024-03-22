import React, { useContext } from "react";
import DataContext from "./ContextApi/DataContext";

function CertifiList(props) {
  const { certificationList } = props;

  const { reqId, setReqId } = useContext(DataContext);

  const handleOpen = (openedId) => {
    setReqId(openedId);
  };
  let listconstyle = {
    overflow: "hidden",
    transition: "0.3s ease",
  };
  return (
    <nav className="col-12 bgBlack p-2 rounded m-1 ">
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
