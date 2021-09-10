import { useState, useContext, useRef } from "react";
import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  Text,
  Box,
  IconButton,
  Input,
  useColorMode,
} from "@chakra-ui/react";

// context
import GlobalContext from "../contexts/global";

//components
import InputFileButton from "../components/InputFileButton";

const SourceMenuButton = () => {
  const { setSourceImage, setOpenCaptureModal, setOpenSourceCaptureModal } =
    useContext(GlobalContext);
  const { colorMode } = useColorMode();

  const setFile = (event) => {
    let file = event.target.files[0];
    console.log("File: ", file);
    // setSourceImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      // use a regex to remove data url part
      const readerresult = reader.result;
      const base64String = readerresult
        .replace("data:", "")
        .replace(/^.+,/, "");

      // log to console
      // logs wL2dvYWwgbW9yZ...
      // console.log(base64String);
      //   setShowSourceImage(readerresult);
      setSourceImage(base64String);
    };
    reader.readAsDataURL(file);
  };

  const openImageCaptureModal = () => {
    setOpenSourceCaptureModal(true);
  };

  const fs_gradient = {
    dark: [
      "linear(to-tr, teal.300,yellow.400)",
      "linear(to-t, blue.200, teal.500)",
      "linear(to-b, orange.100, purple.300)",
    ],
    light: "linear(to-l, #7928CA,#FF0080)",
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          variant="solid"
          size="md"
          colorScheme="facebook"
          //   bgGradient="linear(to right, #224d8f,#d55191)"
          bgGradient={fs_gradient[colorMode]}
          color={colorMode === "light" ? "gray.100" : "gray.900"}
          _hover={{
            bgGradient:
              colorMode === "light"
                ? fs_gradient["dark"]
                : fs_gradient["light"],
            color: colorMode === "light" ? "gray.100" : "gray.900",
          }}
        >
          UPLOAD
        </MenuButton>
        <MenuList>
          <InputFileButton
            setFile={setFile}
            buttonTxt={"Select"}
            color={colorMode === "dark" ? "white" : "white"}
          />
          <MenuDivider />
          <MenuItem onClick={openImageCaptureModal}>Capture</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SourceMenuButton;
