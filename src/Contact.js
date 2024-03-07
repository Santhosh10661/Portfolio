import React, { useState } from "react";
import "./Css/Contact.css";
import { RiMailSendFill } from "react-icons/ri";
import { MdOutlineError } from "react-icons/md";
import mailSvg from "./svg/undraw_envelope_re_f5j4.svg";
import Heading from "./commonContents/Heading";
import Emailjs from "./Emailjs";

function Contact() {
  let heading = "contact";
  let [isLoading, setIsLoading] = useState(false);
  let [mailSuccess, setMailSuccess] = useState(false);
  let [mailErr, setMailErr] = useState(false);
  return (
    <section className="container-fluid Contact" id="Contact">
      <div className="row">
        <Heading heading={heading} />
      </div>
      <div className="col-12 my-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-12 col-md-5 d-flex justify-content-center ">
            <img src={mailSvg} alt="" className="col-8 col-md-10 dropSha" />
          </div>
          <div className="col-12 col-md-5 position-relative rounded">
            <Emailjs
              setMailSuccess={setMailSuccess}
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              setMailErr={setMailErr}
            />
            {isLoading && (
              <div
                className="returnMessage col-12"
                style={{ height: "100%", overflow: "hidden" }}
              >
                {mailSuccess && (
                  <div className="bgBlack col-5 text-center p-2 rounded mailSuccess">
                    <RiMailSendFill className="fs-1 m-1" />
                    <p>mail sended successfully</p>
                  </div>
                )}
                {mailErr && (
                  <div className="bgBlack col-5 text-center p-2 rounded mailErr">
                    <MdOutlineError className="fs-1 m-1" />
                    <p>failed try again</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
