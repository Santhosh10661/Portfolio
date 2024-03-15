import { createContext, useState } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [newPageOpend, setNewPageOpened] = useState(false);
  const [profileImg, setProfileImg] = useState(true);
  const [showImg, setShowImg] = useState(false);
  const [menuBtnClicked, setmenuBtnClicked] = useState(false);
  const [reqId, setReqId] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [mailSuccess, setMailSuccess] = useState(false);
  const [mailErr, setMailErr] = useState(false);

  return (
    <DataContext.Provider
      value={{
        newPageOpend,
        setNewPageOpened,
        profileImg,
        setProfileImg,
        showImg,
        setShowImg,
        menuBtnClicked,
        setmenuBtnClicked,
        reqId,
        setReqId,
        isLoading,
        setIsLoading,
        mailSuccess,
        setMailSuccess,
        mailErr,
        setMailErr,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
