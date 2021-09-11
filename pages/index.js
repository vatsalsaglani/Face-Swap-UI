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
        <title>FaceSwitch</title>
      </Head>
      <FaceSwapHeader />
      <Container minWidth="85%">
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
