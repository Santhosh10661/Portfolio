import React from "react";

function OpenCertificateCon(props) {
  let { reqId, certificationList, openCertificate } = props;

  let reqCertificate = certificationList.filter(
    (certificate) => reqId === certificate.id
  );

  console.log(reqCertificate);
  return (
    <>
      <div className="col-12 col-sm-6 my-2">
        <img
          src={reqCertificate[0].img}
          alt=""
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div className="col certifiInfoCon my-2 p-2 rounded">
        <h3 className="certifiTitle m-0 my-1">{reqCertificate[0].title}</h3>
        <div className="certifiInfo rounded p-2 mx-1">
          <p>platform : {reqCertificate[0].issuedBy}</p>
          <p>Date Of completion : {reqCertificate[0].completionDate}</p>
          <p>Percentage : {reqCertificate[0].grade} %</p>
        </div>
      </div>
    </>
  );
}

export default OpenCertificateCon;
