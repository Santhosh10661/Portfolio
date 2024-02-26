import React from "react";

function OpenCertificateCon(props) {
  let { reqId, certificationList, openCertificate } = props;

  let reqCertificate = certificationList.filter(
    (certificate) => reqId === certificate.id
  );

  console.log(reqCertificate);
  return (
    <>
      {openCertificate === true ? (
        <img src={reqCertificate[0].img} alt="" className="col-5" />
      ) : (
        <></>
      )}
    </>
  );
}

export default OpenCertificateCon;
