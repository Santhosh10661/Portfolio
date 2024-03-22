import React, { useContext } from "react";
import CertifiList from "./CertifiList";
import { PiCertificateFill } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import { FaRegCalendarCheck, FaLocationArrow } from "react-icons/fa6";
import { GiUpgrade } from "react-icons/gi";
import DataContext from "./ContextApi/DataContext";

function OpenCertificateCon(props) {
  const { certificationList } = props;
  const { reqId } = useContext(DataContext);

  let reqCertificate = certificationList.filter(
    (certificate) => reqId === certificate.id
  );

  return (
    <>
      <div className="col-12 col-md-10 col-lg-6 p-1">
        <img
          src={reqCertificate[0].img}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="bgWhite col-12 col-lg-6 d-flex flex-column flex-lg-column-reverse justify-content-center p-2 rounded mt-1">
        <div
          className="col-12 bgWhite rounded m-1"
          style={{ border: "4px solid #2c3333 " }}
        >
          <h5 className="m-0 p-2 bgBlack">
            {reqCertificate[0].title} <PiCertificateFill className="fs-2" />
          </h5>
          <div>
            <div className="fw-bold d-flex align-items-center m-1">
              <MdCastForEducation className="fs-3 m-1" />
              <p className="m-0 mt-1">{reqCertificate[0].issuedBy}</p>
            </div>
            <div className="fw-bold d-flex align-items-center m-1">
              <FaRegCalendarCheck className="fs-3 m-1" />
              <p className="m-0 mt-1"> {reqCertificate[0].completionDate}</p>
            </div>
            <div className="fw-bold d-flex align-items-center m-1">
              <GiUpgrade className="fs-3 m-1" />
              <p className="m-0 mt-1">{reqCertificate[0].grade} %</p>
            </div>
            <p className="fw-bold text-primary">
              <a href={reqCertificate[0].link} className="mt-1" target="blank">
                <FaLocationArrow className="fs-3 m-1" />
                more details
              </a>
            </p>
          </div>
        </div>
        <CertifiList certificationList={certificationList} />
      </div>
    </>
  );
}

export default OpenCertificateCon;
