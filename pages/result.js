import { useEffect, useContext, useState } from "react";
import {
  useColorMode,
  Container,
  Text,
  IconButton,
  Box,
  Image,
  Tooltip,
  Link as ChakraLink,
} from "@chakra-ui/react";

import {
  AiOutlineRotateLeft,
  AiOutlineRotateRight,
  AiOutlineDownload,
} from "react-icons/ai";

// import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";

//contexts
import GlobalContext from "../contexts/global";

// components
import FaceSwapHeader from "../components/FaceSwapHeader";

export default function Result() {
  const { colorMode } = useColorMode();
  const { swappedImage } = useContext(GlobalContext);
  const [rotation, setRotation] = useState(0);
  const fs_gradient = {
    dark: [
      "linear(to-tr, teal.300,yellow.400)",
      "linear(to-t, blue.200, teal.500)",
      "linear(to-b, orange.100, purple.300)",
    ],
    light: "linear(to-l, #7928CA,#FF0080)",
  };
  const router = useRouter();

  const onClickOnceMore = () => {
    router.push("/");
    router.reload();
  };

  useEffect(() => {
    if (!swappedImage) {
      router.push("/");
    }
  }, []);

  if (!swappedImage) {
    return <></>;
  }

  const rotateRight = () => {
    let nr = rotation + 90;
    if (nr >= 360) {
      nr = -360;
    }
    setRotation(nr);
  };

  const rotateLeft = () => {
    let nr = rotation - 90;
    if (nr >= 360) {
      nr = -360;
    }
    setRotation(nr);
  };

  const downloadImage = () => {
    let image = `data:image/png;base64,  ${swappedImage}`;
    let img_ele = document.createElement("a");
    img_ele.href = image;
    let rs = (Math.random() + 1).toString(36).substring(7);
    img_ele.download = `result-switched-image-${rs}.png`;
    img_ele.click();
  };

  return (
    <Container minWidth="100%">
      <Head>
        <title>FaceSwitch Result</title>
      </Head>
      <FaceSwapHeader />
      <Container pt="15px" pb="15px" mt="10px" mb="10px" minWidth="85%">
        <Container minWidth="100%">
          <Container minWidth="70%" pt="15px" pb="15px" pl="5px" pr="5px">
            <Text
              fontWeight="bold"
              textAlign="center"
              color="whiteAlpha.900"
              fontSize="lg"
              mt="8px"
              mb="12px"
            >
              Swapped Image
            </Text>
            <Container
              minWidth="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                src={`data:image/png;base64,  ${swappedImage}`}
                htmlHeight="100%"
                htmlWidth="100%"
                maxWidth="90%"
                minHeight="100px"
                _hover={{
                  // border: "2px blue",
                  // borderRadius: "md",
                  boxShadow:
                    "inset 12px 12px 26px #6d6d74,inset -12px -12px 26px #93939e",
                }}
                sx={{
                  transform: `rotate(${rotation}deg)`,
                }}
                borderRadius="md"
                boxShadow={
                  colorMode === "light"
                    ? "2px 2px 6px #d9d9d9, -2px -2px 6px #ffffff"
                    : "2px 2px 6px #222433, -2px -2px 6px #2e3045"
                }
                mb="25px"
              />
              {/* <Box my="4px">
                <Button onClick={rotateLeft}>Rotate Left</Button>
                <Button onClick={rotateRight}>Rotate Right</Button>
              </Box> */}
            </Container>
            <Box
              my="10px"
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Tooltip label="Rotate Left">
                <IconButton
                  isRound
                  variant="solid"
                  //   colorScheme="facebook"
                  bgGradient={fs_gradient[colorMode]}
                  color={colorMode === "light" ? "gray.100" : "gray.900"}
                  aria-label="Close"
                  //   fontSize="20px"
                  icon={<AiOutlineRotateLeft />}
                  onClick={rotateLeft}
                  _hover={{
                    bgGradient:
                      colorMode === "light"
                        ? fs_gradient["dark"]
                        : fs_gradient["light"],
                    color: colorMode === "light" ? "gray.100" : "gray.900",
                  }}
                />
              </Tooltip>
              <Tooltip label="Download">
                <IconButton
                  isRound
                  variant="solid"
                  //   colorScheme="facebook"
                  bgGradient={fs_gradient[colorMode]}
                  color={colorMode === "light" ? "gray.100" : "gray.900"}
                  aria-label="Close"
                  //   fontSize="20px"
                  icon={<AiOutlineDownload />}
                  onClick={downloadImage}
                  _hover={{
                    bgGradient:
                      colorMode === "light"
                        ? fs_gradient["dark"]
                        : fs_gradient["light"],
                    color: colorMode === "light" ? "gray.100" : "gray.900",
                  }}
                />
              </Tooltip>
              <Tooltip label="Rotate Right">
                <IconButton
                  isRound
                  variant="solid"
                  //   colorScheme="facebook"
                  bgGradient={fs_gradient[colorMode]}
                  color={colorMode === "light" ? "gray.100" : "gray.900"}
                  aria-label="Close"
                  //   fontSize="20px"
                  icon={<AiOutlineRotateRight />}
                  onClick={rotateRight}
                  _hover={{
                    bgGradient:
                      colorMode === "light"
                        ? fs_gradient["dark"]
                        : fs_gradient["light"],
                    color: colorMode === "light" ? "gray.100" : "gray.900",
                  }}
                />
              </Tooltip>
            </Box>
          </Container>
          <Container
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="center"
          >
            <ChakraLink
              variant="solid"
              fontStyle="italic"
              color={colorMode === "light" ? "gray.300" : "gray.500"}
              fontSize="lg"
              my="20px"
              onClick={onClickOnceMore}
              style={{ textDecoration: "none" }}
              _hover={{
                color: "red",
              }}
            >
              switch again
            </ChakraLink>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}
