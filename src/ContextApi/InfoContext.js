import React, { createContext, useState } from "react";

const InfoContext = createContext({});

export const InfoProvider = ({ children }) => {
  let [myName, setMyName] = useState("santhosh");

  return (
    <InfoContext.Provider value={{ myName, setMyName }}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoContext;
