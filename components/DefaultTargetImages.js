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
} from "@chakra-ui/react";

const PhotoGridModal = () => {
  const {
    openImageGridModal,
    setOpenImageGridModal,
    targetImage,
    setIsDefault,
  } = useContext(GlobalContext);

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
              colorScheme="facebook"
              bgGradient="linear(to right, #224d8f,#d55191)"
            >
              Submit
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
