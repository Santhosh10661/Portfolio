import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

function RoleTypeWriter() {
  const [text] = useTypewriter({
    words: ["Frontend Developer", "Ui Developer", "React.js Developer"],
    loop: {},
  });
  return (
    <div
      className="d-flex align-items-center my-1"
      style={{
        backgroundColor: "#ffffec",
        color: "#2c3333",
        borderRadius: "5px",
        width: "fit-content",
      }}
    >
      <h4 className="fw-bolder m-0 p-1 pt-2">I am a </h4>
      <span className="h4 fw-bolder p-1 pt-2  m-0 mx-1">
        <span>{text}</span>

        <Cursor cursorColor="#2c3333" />
      </span>
    </div>
  );
}

export default RoleTypeWriter;
