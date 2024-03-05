import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import UpdatePage from "./UpdatePage";

function App() {
  let [newPageOpend, setNewPageOpened] = useState(false);

  let navigate = useNavigate();
  function handleNewPage() {
    setNewPageOpened(true);
  }

  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return (
    <div className="container-fluid App">
      <Home newPageOpend={newPageOpend} handleNewPage={handleNewPage} />
      {newPageOpend && <UpdatePage setNewPageOpened={setNewPageOpened} />}
    </div>
  );
}

export default App;
