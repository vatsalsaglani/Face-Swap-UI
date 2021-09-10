import { useState, useContext } from "react";
import {
  Box,
  Center,
  Button,
  Text,
  useColorMode,
  Image,
} from "@chakra-ui/react";

// contexts
import GlobalContext from "../contexts/global";

// components
import TargetMenuButton from "../components/TargetMenuButton";

const TargetCard = () => {
  const { setOpenImageGridModal, targetImage, isDefault } =
    useContext(GlobalContext);
  const { colorMode, toogleColorMode } = useColorMode();
  const openModal = () => {
    setOpenImageGridModal(true);
  };
  console.log("Target Image: ", targetImage);
  return (
    <Box
      minHeight="55vh"
      mt="20px"
      mb="20px"
      boxShadow={
        colorMode === "light"
          ? "2px 2px 6px #d9d9d9, -2px -2px 6px #ffffff"
          : "2px 2px 6px #222433, -2px -2px 6px #2e3045"
      }
      pt="8px"
      pb="8px"
      borderRadius="md"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box pt="4px" pb="4px">
        <Text textAlign="center" fontSize="xl">
          Target Image
        </Text>
      </Box>
      {targetImage ? (
        <Box pt="4px" pb="4px" pl="5px" pr="5px">
          <Image
            src={
              isDefault ? targetImage : `data:image/png;base64,  ${targetImage}`
            }
            borderRadius="md"
            _hover={{
              cursor: "pointer",
              // border: "2px blue",
              // borderRadius: "md",
              boxShadow: "2px 2px 6px #6d6d74,-2px -2px 6px #93939e",
            }}
          />
        </Box>
      ) : null}

      <Box pt="4px" pb="4px" mt="8px" mb="8px">
        <Center display="flex">
          <TargetMenuButton />
        </Center>
      </Box>
    </Box>
  );
};

export default TargetCard;
