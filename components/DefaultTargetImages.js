import { useState, useContext } from "react";

import ImageGrid from "./PhotoGrid";
import GlobalContext from "../contexts/global";

import {
  Container,
  Text,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useColorMode,
} from "@chakra-ui/react";

const PhotoGridModal = () => {
  const {
    openImageGridModal,
    setOpenImageGridModal,
    targetImage,
    setIsDefault,
  } = useContext(GlobalContext);

  const { colorMode } = useColorMode();

  const fs_gradient = {
    dark: [
      "linear(to-tr, teal.300,yellow.400)",
      "linear(to-t, blue.200, teal.500)",
      "linear(to-b, orange.100, purple.300)",
    ],
    light: "linear(to-l, #7928CA,#FF0080)",
  };

  const closeModal = () => {
    if (targetImage) {
      setIsDefault(true);
      setOpenImageGridModal(false);
    } else {
      setOpenImageGridModal(false);
    }
  };
  if (openImageGridModal) {
    return (
      <Modal
        onClose={closeModal}
        size={"full"}
        isOpen={openImageGridModal}
        scrollBehavior={"inside"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Choose Target Image</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ImageGrid />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={closeModal}
              // colorScheme="facebook"
              variant="solid"
              bgGradient={fs_gradient[colorMode]}
              _hover={{
                bgGradient:
                  colorMode === "light"
                    ? fs_gradient["dark"]
                    : fs_gradient["light"],
                color: colorMode === "light" ? "gray.100" : "gray.900",
              }}
            >
              SUBMIT
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  } else {
    return <></>;
  }
};

export default PhotoGridModal;
