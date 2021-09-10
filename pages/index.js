import Head from "next/head";
import {
  useColorMode,
  Container,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
// import { MoonIcon, SunIcon } from "@chakra-ui/icons";

// import { useState } from "react";

//contexts

// import GlobalContext from "../contexts/global";

// components
import FaceSwapHeader from "../components/FaceSwapHeader";
import PhotoGridModal from "../components/DefaultTargetImages";
import SourceCard from "../components/SourceCard";
import TargetCard from "../components/TargetCard";
import ImageCaptureModal from "../components/ImageCaptureModal";
import SwapItButton from "../components/SwapItButton";

export default function Home() {
  const { colorMode } = useColorMode();
  const fs_gradient = {
    dark: [
      "linear(to-tr, teal.300,yellow.400)",
      "linear(to-t, blue.200, teal.500)",
      "linear(to-b, orange.100, purple.300)",
    ],
    light: "linear(to-l, #7928CA,#FF0080)",
  };
  return (
    <Container minWidth="100%">
      <Head>
        <title>FaceSwap 🎆 🎇</title>
      </Head>
      <FaceSwapHeader />
      <Container minWidth="85%">
        <Container>
          <Text
            fontSize="sm"
            color={colorMode === "light" ? "gray.900" : "gray.100"}
            textAlign="justify"
          >
            Swap someone’s face in a cool photo with your face or check how
            would you look if you were someone else. You need to upload a source
            image and you also need to upload a target image on which you want
            the face in your source image. You can try using any of the default
            target images also.
          </Text>
        </Container>
        <Container minWidth="100%">
          <SimpleGrid spacing={4} mt="15px" minChildWidth="35vh">
            <SourceCard />
            <TargetCard />
          </SimpleGrid>
          {/* <Grid templateColumns="repeat(2, 1fr)" gap={5} mt="15px">
          </Grid> */}
          <Container
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            {/* <Button
              variant="solid"
              size="md"
              bgGradient={fs_gradient[colorMode]}
              color={colorMode === "light" ? "gray.100" : "gray.900"}
              fontWeight="bold"
              fontSize="xl"
            >
              Swap It
            </Button> */}
            <SwapItButton />
          </Container>
        </Container>
        <PhotoGridModal />
        <ImageCaptureModal card={"source"} />
        <ImageCaptureModal card={"target"} />
      </Container>
    </Container>
  );
}
