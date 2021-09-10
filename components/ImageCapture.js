import React, { useState, useContext, useEffect } from "react";
import {
  Button,
  Box,
  Container,
  Text,
  Image,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import { AiFillCamera } from "react-icons/ai";

// contexts
import GlobalContext from "../contexts/global";

const ImageCapture = ({ card }) => {
  let videoPlayer = {};
  const [captureImage, setCaptureImage] = useState(null);
  const {
    setSourceImage,
    setTargetImage,
    setOpenTargetCaptureModal,
    setOpenSourceCaptureModal,
    isDefault,
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

  // let [canvas, setCanvas] = useState(null);

  // console.log(captureImage);

  const setDevices = async (device) => {
    const { deviceId } = device;
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: { deviceId },
    });
    videoPlayer.srcObject = stream;
    videoPlayer.play();
  };

  const processDevices = (devices) => {
    devices.forEach((device) => {
      console.log("Device Label: ", device.label);
      setDevices(device);
    });
  };

  const stop = () => {
    videoPlayer.srcObject.getTracks().forEach((track) => {
      track.stop();
    });
    // videoPlayer.srcObject.stop();
    if (card === "source") {
      setOpenSourceCaptureModal(false);
    } else if (card === "target") {
      setOpenTargetCaptureModal(false);
    }
    // setOpenCaptureModal(false);
  };

  const captureImageFunc = () => {
    let vp = document.querySelector("video");

    let canvas = document.createElement("canvas");
    canvas.width = vp.offsetWidth;
    canvas.height = vp.offsetHeight;

    const context = canvas.getContext("2d");

    context.drawImage(videoPlayer, 0, 0, vp.offsetWidth, vp.offsetHeight);
    canvas.toBlob((file) => {
      let src = window.URL.createObjectURL(file);
      console.log("SRC: ", src);
      setCaptureImage(src);
      //   setTargetImage(src);
      const reader = new FileReader();
      reader.onloadend = () => {
        const readerresult = reader.result;
        const base64string = readerresult
          .replace("data:", "")
          .replace(/^.+,/, "");
        console.log("B64S: ", base64string);
        if (card === "source") {
          setSourceImage(base64string);
        } else if (card === "target") {
          setTargetImage(base64string);
          if (isDefault) {
            setIsDefault(false);
          }
        }
      };
      reader.readAsDataURL(file);
    });
  };

  useEffect(() => {
    async function mount() {
      const cameras = await navigator.mediaDevices.enumerateDevices();
      processDevices(cameras);
    }
    mount();
  }, []);

  return (
    <Container maxWidth="90%">
      <Box
        display="flex"
        flexDirection="row"
        alignItems="flex-start"
        justifyContent="space-between"
        my="20px"
      >
        <Text fontSize="lg" fontWeight="bold">
          {/* Capture Image */}
          {card === "source"
            ? "Capture Source Image"
            : card === "target"
            ? "Capture Target Image"
            : "Capture Image"}
        </Text>
        <IconButton
          isRound
          variant="solid"
          size={"sm"}
          //   colorScheme="facebook"
          bgGradient={fs_gradient[colorMode]}
          color={colorMode === "light" ? "gray.100" : "gray.900"}
          aria-label="Close"
          //   fontSize="20px"
          icon={<CloseIcon />}
          onClick={stop}
        />
      </Box>

      {videoPlayer ? (
        <Box
          borderRadius={"md"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          my="20px"
        >
          <video
            style={{ borderRadius: "5px" }}
            ref={(ref) => (videoPlayer = ref)}
            width="680"
            heigh="360"
          />
          <Box my="20px">
            <IconButton
              isRound
              variant="solid"
              //   colorScheme="facebook"
              bgGradient={fs_gradient[colorMode]}
              color={colorMode === "light" ? "gray.100" : "gray.900"}
              aria-label="Close"
              //   fontSize="20px"
              icon={<AiFillCamera />}
              //   onClick={stop}
              onClick={captureImageFunc}
            />
            {/* <Button ml="5px" onClick={stop}>
              Stop
            </Button> */}
          </Box>
        </Box>
      ) : (
        <Text>Getting Video</Text>
      )}
      <Container>
        {captureImage ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-between"
            my="20px"
          >
            <Image
              // width="680"
              // height="360"
              borderRadius="md"
              src={captureImage}
            />
            <Button
              my="5px"
              variant="solid"
              size="md"
              colorScheme="facebook"
              onClick={stop}
              bgGradient={fs_gradient[colorMode]}
              color={colorMode === "light" ? "gray.100" : "gray.900"}
            >
              SUBMIT
            </Button>
          </Box>
        ) : null}
      </Container>
    </Container>
  );
};

export default ImageCapture;
