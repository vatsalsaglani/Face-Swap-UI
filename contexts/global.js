import { createContext, useState } from "react";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [sourceImage, setSourceImage] = useState(null);
  const [targetImage, setTargetImage] = useState(null);
  const [openImageGridModal, setOpenImageGridModal] = useState(false);
  const [isDefault, setIsDefault] = useState(null);
  const [openCaptureModal, setOpenCaptureModal] = useState(null);
  const [openSourceCaptureModal, setOpenSourceCaptureModal] = useState(null);
  const [openTargetCaptureModal, setOpenTargetCaptureModal] = useState(null);
  const [swappedImage, setSwappedImage] = useState(null);
  const [doingSwap, setDoingSwap] = useState(false);
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
        openCaptureModal,
        setOpenCaptureModal,
        openSourceCaptureModal,
        setOpenSourceCaptureModal,
        openTargetCaptureModal,
        setOpenTargetCaptureModal,
        swappedImage,
        setSwappedImage,
        doingSwap,
        setDoingSwap,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
