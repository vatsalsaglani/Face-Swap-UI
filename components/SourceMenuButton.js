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
  const { setSourceImage } = useContext(GlobalContext);
  const { colorMode } = useColorMode();
  const fileRef = useRef();
  // const
  //   const chooseFile = () => {
  //     const { current } = fileRef(current || { click: () => {} }).click();
  //   };

  const chooseFile = (fileRef) => {
    fileRef.current.click();
  };

  const setFile = (event) => {
    let file = event.target.files[0];
    console.log("File: ", file);
    setSourceImage(file);
  };

  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          variant="solid"
          size="md"
          colorScheme="facebook"
          bgGradient="linear(to right, #224d8f,#d55191)"
        >
          UPLOAD
        </MenuButton>
        <MenuList>
          <InputFileButton
            // ref={fileRef}
            // chooseFile={chooseFile}
            setFile={setFile}
            buttonTxt={"Select"}
            color={colorMode === "dark" ? "white" : "white"}
          />
          <MenuDivider />
          <MenuItem>Capture</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default SourceMenuButton;
