import { useState, useContext, useRef } from "react";
import {
  Button,
  MenuButton,
  MenuItem,
  MenuIcon,
  Text,
  Box,
  Input,
} from "@chakra-ui/react";

const InputFileButton = ({
  //   ref,
  //   chooseFile,
  setFile,
  props,
  buttonTxt,
  type = "menu",
}) => {
  const fileRef = useRef();

  const chooseFile = () => {
    fileRef.current.click();
  };

  if (type === "menu") {
    return (
      <>
        <input
          ref={fileRef}
          type="file"
          style={{ display: "none" }}
          accept=".jpg,.png,.jpeg"
          onChange={(e) => setFile(e)}
        />
        <MenuItem onClick={chooseFile} {...props}>
          {buttonTxt}
        </MenuItem>
      </>
    );
  } else {
    return (
      <>
        <input
          ref={ref}
          type="file"
          style={{ display: "none" }}
          accept=".jpg,.png,.jpeg"
          onChange={(e) => setFile(e)}
        />
        <Button onClick={chooseFile} {...props}>
          {buttonTxt}
        </Button>
      </>
    );
  }
};

export default InputFileButton;
