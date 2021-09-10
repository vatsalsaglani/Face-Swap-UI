import { useContext } from "react";
import { useColorMode, Button, Text, Box, useToast } from "@chakra-ui/react";

import { useRouter } from "next/router";

// contexts
import GlobalContext from "../contexts/global";

// photos
// import { defaultPhotos } from "../pages/photos";
import { defaultPhotos } from "./Photos";

const SwapItButton = () => {
  const { colorMode } = useColorMode();
  const router = useRouter();
  const {
    sourceImage,
    targetImage,
    isDefault,
    doingSwap,
    setDoingSwap,
    setSwappedImage,
    setSourceImage,
    setTargetImage,
  } = useContext(GlobalContext);

  const toast = useToast();

  const fs_gradient = {
    dark: [
      "linear(to-tr, teal.300,yellow.400)",
      "linear(to-t, blue.200, teal.500)",
      "linear(to-b, orange.100, purple.300)",
    ],
    light: "linear(to-l, #7928CA,#FF0080)",
  };

  const onClickSwap = () => {
    if (sourceImage && targetImage) {
      setDoingSwap(true);
      let reqBody = {
        source: sourceImage,
        target: isDefault
          ? defaultPhotos.filter((item) => item.src === targetImage)[0]["name"]
          : targetImage,
        isDefault: isDefault,
        isTest: false,
      };
      try {
        fetch(
          "https://mdii03lzf9.execute-api.us-east-2.amazonaws.com/default/simswap-lambda",
          {
            method: "POST",
            body: JSON.stringify(reqBody),
          }
        )
          .then((result) => {
            return result.json();
          })
          .then((data) => {
            let parsed = JSON.parse(data.body);

            if (parsed.img_bytes) {
              setSwappedImage(parsed.img_bytes);
              setDoingSwap(false);
              router.push("/result");
            } else {
              setDoingSwap(false);
              toast({
                position: "bottom-left",
                render: () => (
                  <Box color="white" p={3} bg="red.500">
                    Error communicating with the host
                  </Box>
                ),
              });
            }
          });
      } catch (err) {
        console.log("Error: ", err);
        setDoingSwap(false);
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="red.500">
              Error communicating with the host
            </Box>
          ),
        });
      }
    } else {
      toast({
        position: "bottom-left",
        render: () => (
          <Box color="white" p={3} bg="orange.500">
            {/* Error communicating with the host */}
            {!sourceImage && !targetImage
              ? "Cannot do FaceSwap without Images"
              : !sourceImage
              ? "Need a source image to swap the face on target image"
              : !targetImage
              ? "Need to select a target image for FaceSwap"
              : null}
          </Box>
        ),
      });
    }
  };

  return (
    <>
      {doingSwap ? (
        <Button
          isLoading
          variant="solid"
          size="md"
          bgGradient={fs_gradient[colorMode]}
          color={colorMode === "light" ? "gray.100" : "gray.900"}
          fontWeight="bold"
          fontSize="xl"
          onClick={onClickSwap}
          _hover={{
            bgGradient:
              colorMode === "light"
                ? fs_gradient["dark"]
                : fs_gradient["light"],
            color: colorMode === "light" ? "gray.100" : "gray.900",
          }}
        >
          SWAP IT
        </Button>
      ) : (
        <Button
          variant="solid"
          size="md"
          bgGradient={fs_gradient[colorMode]}
          color={colorMode === "light" ? "gray.100" : "gray.900"}
          fontWeight="bold"
          fontSize="xl"
          onClick={onClickSwap}
          _hover={{
            bgGradient:
              colorMode === "light"
                ? fs_gradient["dark"]
                : fs_gradient["light"],
            color: colorMode === "light" ? "gray.100" : "gray.900",
          }}
        >
          SWAP IT
        </Button>
      )}
    </>
  );
};

export default SwapItButton;
