import React from "react";
import CertifiList from "./CertifiList";
import { PiCertificateFill } from "react-icons/pi";
import { MdCastForEducation } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { GiUpgrade } from "react-icons/gi";

function OpenCertificateCon(props) {
  let { reqId, certificationList, handleOpen } = props;

  let reqCertificate = certificationList.filter(
    (certificate) => reqId === certificate.id
  );

  console.log(reqCertificate);
  return (
    <>
      <div className="col-12 col-sm-6 p-2">
        <img
          src={reqCertificate[0].img}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="col-12 col-sm-6 d-flex flex-column-reverse flex-sm-column certifiInfoCon p-2 rounded">
        <CertifiList
          certificationList={certificationList}
          handleOpen={handleOpen}
          reqId={reqId}
        />
        <div className="col-12 certifiInfo rounded p-2">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default OpenCertificateCon;
