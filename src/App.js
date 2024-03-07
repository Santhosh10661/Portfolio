import React, { useState } from "react";
import "./App.css";
import Home from "./Home";
import UpdatePage from "./UpdatePage";

function App() {
  let [newPageOpend, setNewPageOpened] = useState(false);
  let [profileImg, setProfileImg] = useState(true);

  function handleNewPage() {
    setProfileImg(false);
    setTimeout(() => {
      setNewPageOpened(true);
    }, 200);
    // setNewPageOpened(true);
  }

  function handleClosePage() {
    setNewPageOpened(false);
    setTimeout(() => {
      setProfileImg(true);
    }, 1500);
  }

  return (
    <div className="container-fluid App">
      <Home
        newPageOpend={newPageOpend}
        handleNewPage={handleNewPage}
        profileImg={profileImg}
      />
      {newPageOpend && <UpdatePage handleClosePage={handleClosePage} />}
    </div>
  );
}

export default App;
