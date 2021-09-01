import { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [sourceImage, setSourceImage] = useState(null);
  const [targetImage, setTargetImage] = useState(null);
  const [openImageGridModal, setOpenImageGridModal] = useState(null);
  const [isDefault, setIsDefault] = useState(null);

  return (
    <GlobalContext.Provider
      value={{
        sourceImage,
        setSourceImage,
        targetImage,
        setTargetImage,
        openImageGridModal,
        setOpenImageGridModal,
        isDefault,
        setIsDefault,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
