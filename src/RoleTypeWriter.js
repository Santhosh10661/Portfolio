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
        color: "#ffffec",
        width: "fit-content",
      }}
    >
      <h4 className="fw-bolder m-0 ">I am a </h4>
      <span className="h4 fw-bolder m-0 mx-1" style={{ color: "#2EC1AC" }}>
        <span>{text}</span>

        <Cursor cursorColor="#2EC1AC" />
      </span>
    </div>
  );
}

export default RoleTypeWriter;
