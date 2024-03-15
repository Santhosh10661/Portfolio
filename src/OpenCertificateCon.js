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

      <div className="bgWhite col-12 col-md-12 col-lg-6 d-flex flex-column-reverse flex-md-row-reverse flex-lg-column p-2 rounded mt-1 ">
        <CertifiList certificationList={certificationList} />
        <div className="col-12 col-md-7 col-lg-12 bgWhite rounded p-2">
          <h4 className="m-0 my-1 p-2 rounded bgBlack">
            {reqCertificate[0].title} <PiCertificateFill className="fs-2" />
          </h4>
          <div>
            <p className="fw-bold">
              <MdCastForEducation className="fs-3 m-1" />
              {reqCertificate[0].issuedBy}
            </p>
            <p className="fw-bold">
              <FaRegCalendarCheck className="fs-3 m-1" />
              {reqCertificate[0].completionDate}
            </p>
            <p className="fw-bold">
              <GiUpgrade className="fs-3 m-1" />
              {reqCertificate[0].grade} %
            </p>
            <p className="fw-bold">
              <a
                href={reqCertificate[0].link}
                className="mt-1"
                target="blank"
                style={{ color: "#2c3333" }}
              >
                <FaLocationArrow className="fs-3 m-1" />
                more details
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenCertificateCon;
