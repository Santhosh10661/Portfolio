import React, { createContext } from "react";
import { DataProvider } from "./DataContext";
import { InfoProvider } from "./InfoContext";

const AllContext = createContext({});

export const AllContextProvider = ({ children }) => {
  return (
    <DataProvider>
      <InfoProvider>{children}</InfoProvider>
    </DataProvider>
  );
};

export default AllContext;
