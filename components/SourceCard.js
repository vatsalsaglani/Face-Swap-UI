import { useState, useContext } from "react";
import { Box, Center, Button, Text, useColorMode } from "@chakra-ui/react";

// contexts
import GlobalContext from "../contexts/global";

// components
import SourceMenuButton from "../components/SourceMenuButton";

const SourceCard = () => {
  const { setOpenImageGridModal } = useContext(GlobalContext);
  const { colorMode, toogleColorMode } = useColorMode();
  const openModal = () => {
    setOpenImageGridModal(true);
  };
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
          Source Image
        </Text>
      </Box>
      <Box pt="4px" pb="4px" mt="8px" mb="8px">
        <Center display="flex">
          {/* <Button
            variant="solid"
            size="md"
            colorScheme="facebook"
            bgGradient="linear(to right, #224d8f,#d55191)"
            // onClick={setOpenImageGridModal(true)}
            onClick={openModal}
          >
            UPLOAD
          </Button> */}
          <SourceMenuButton />
        </Center>
      </Box>
    </Box>
  );
};

export default SourceCard;
