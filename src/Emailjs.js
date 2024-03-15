import React, { useContext, useRef, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { RiSendPlaneFill } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import DataContext from "./ContextApi/DataContext";

function Emailjs() {
  const { isLoading, setIsLoading, setMailSuccess, setMailErr } =
    useContext(DataContext);

  let [fName, setFName] = useState("");
  let [fEmail, setFEmail] = useState("");
  let [fMessage, setFMessage] = useState("");
  let form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    await emailjs
      .sendForm("service_sydrf49", "template_32den8s", form.current, {
        publicKey: "tX11Ew0uGOgi63GJz",
      })
      .then(
        () => {
          setMailSuccess(true);
          setFName("");
          setFEmail("");
          setFMessage("");
        },
        (error) => {
          setMailErr(true);
        }
      );

    setTimeout(() => {
      setMailErr(false);
      setMailSuccess(false);
      setIsLoading(false);
    }, 4000);
  };
  return (
    <form ref={form} onSubmit={sendEmail} className=" postion-relative">
      <div className="d-flex flex-column my-2 ">
        <label htmlFor="from_name">name*</label>
        <input
          type="text"
          value={fName}
          onChange={(e) => {
            setFName(e.target.value);
          }}
          name="from_name"
          className="col-12 p-2 bgWhite rounded inputBox"
          required
        />
      </div>
      <div className="d-flex flex-column my-2">
        <label htmlFor="from_email">email id*</label>
        <input
          type="email"
          value={fEmail}
          onChange={(e) => {
            setFEmail(e.target.value);
          }}
          name="from_email"
          className="col-12 p-2 bgWhite rounded inputBox"
          required
        />
      </div>
      <div className="d-flex flex-column my-2">
        <label htmlFor="message">message*</label>
        <textarea
          id=""
          value={fMessage}
          onChange={(e) => {
            setFMessage(e.target.value);
          }}
          cols="30"
          rows="8"
          name="message"
          className="col-12 p-2 bgWhite rounded inputBox"
          required
        ></textarea>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="submit"
          className="col-5 text-capitalize p-2 bgBlack rounded-pill d-felx align-self-center"
        >
          {isLoading ? (
            <ImSpinner9 className="spinner" />
          ) : (
            <>
              submit <RiSendPlaneFill className="mb-1" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default Emailjs;
