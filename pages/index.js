import Head from "next/head";
import {
  useColorMode,
  Container,
  Text,
  IconButton,
  Box,
  Grid,
  Center,
  Button,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

import { useState } from "react";

//contexts

import GlobalContext from "../contexts/global";

// components
import FaceSwapHeader from "../components/FaceSwapHeader";
import PhotoGridModal from "../components/DefaultTargetImages";
import SourceCard from "../components/SourceCard";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container minWidth="100%">
      <FaceSwapHeader />
      <Container minWidth="85%">
        <SourceCard />
        <PhotoGridModal />
      </Container>
    </Container>
  );
}
