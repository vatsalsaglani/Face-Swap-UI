import { useEffect, useContext, useState } from "react";
import {
  useColorMode,
  Container,
  Text,
  Button,
  IconButton,
  Box,
  Image,
} from "@chakra-ui/react";

import { AiOutlineRotateLeft, AiOutlineRotateRight } from "react-icons/ai";

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

  return (
    <Container minWidth="100%">
      <Head>
        <title>FaceSwap Result 🚀</title>
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
            </Box>
          </Container>
          <Container
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Button
              variant="solid"
              size="md"
              bgGradient={fs_gradient[colorMode]}
              color={colorMode === "light" ? "gray.100" : "gray.900"}
              fontWeight="bold"
              fontSize="xl"
              onClick={onClickOnceMore}
              _hover={{
                bgGradient:
                  colorMode === "light"
                    ? fs_gradient["dark"]
                    : fs_gradient["light"],
                color: colorMode === "light" ? "gray.100" : "gray.900",
              }}
            >
              ONCE MORE 🎈
            </Button>
          </Container>
        </Container>
      </Container>
    </Container>
  );
}