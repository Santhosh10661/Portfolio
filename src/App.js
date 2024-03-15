import React, { useContext } from "react";
import "./App.css";
import Home from "./Home";
import UpdatePage from "./UpdatePage";
import DataContext from "./ContextApi/DataContext";

function App() {
  const { newPageOpend } = useContext(DataContext);

  return (
    <div className="container-fluid App">
      <Home />
      {newPageOpend && <UpdatePage />}
    </div>
  );
}

export default App;
