import { useState, useContext } from "react";
import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

// contexts
import GlobalContext from "../contexts/global";

// components
import ImageCapture from "./ImageCapture";

const ImageCaptureModal = ({ card }) => {
  const {
    openSourceCaptureModal,
    openTargetCaptureModal,
    setOpenTargetCaptureModal,
    setOpenSourceCaptureModal,
  } = useContext(GlobalContext);

  const closeModal = () => {
    if (card === "source") {
      setOpenSourceCaptureModal(false);
    } else if (card === "target") {
      setOpenTargetCaptureModal(false);
    }
  };

  return (
    <Modal
      onClose={closeModal}
      size={"xl"}
      isOpen={
        card === "source"
          ? openSourceCaptureModal
          : card === "target"
          ? openTargetCaptureModal
          : false
      }
      scrollBehavior={"inside"}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <ImageCapture card={card} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ImageCaptureModal;
