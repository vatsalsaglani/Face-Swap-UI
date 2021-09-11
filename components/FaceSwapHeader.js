import {
  Container,
  Text,
  Box,
  IconButton,
  Center,
  Grid,
  useColorMode,
  Link as ChakraLink,
} from "@chakra-ui/react";

import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { FiSun } from "react-icons/fi";

import Link from "next/link";

const FaceSwapHeader = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const fs_gradient = {
    dark: [
      "linear(to-tr, teal.300,yellow.400)",
      "linear(to-t, blue.200, teal.500)",
      "linear(to-b, orange.100, purple.300)",
    ],
    light: "linear(to-l, #7928CA,#FF0080)",
  };
  return (
    <Container
      mt="10px"
      mb="10px"
      minWidth="70%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      pt="10px"
      pb="10px"
    >
      <Box>
        <Link href="/">
          <a>
            <Text
              fontWeight="bold"
              fontSize="5xl"
              color="linkedin.900"
              bgClip="text"
              bgGradient={fs_gradient[colorMode]}
            >
              FaceSwitch
            </Text>
          </a>
        </Link>
        <ChakraLink
          style={{ textDecoration: "none" }}
          fontSize="sm"
          fontStyle="italic"
          color={colorMode === "light" ? "gray.300" : "gray.600"}
          _hover={{
            color: "red",
            bgGradient: fs_gradient[colorMode],
            bgClip: "text",
          }}
          isExternal={true}
          href="https://twitter.com/saglanivatsal"
        >
          By: @saglanivatsal
        </ChakraLink>
      </Box>
      <IconButton
        aria-label="icon"
        icon={colorMode === "light" ? <MoonIcon /> : <FiSun />}
        size="md"
        isRound
        variant="outline"
        bgGradient={fs_gradient[colorMode]}
        mt="4px"
        color={colorMode === "light" ? "gray.100" : "gray.700"}
        onClick={toggleColorMode}
        _hover={{
          bgGradient:
            colorMode === "light" ? fs_gradient["dark"] : fs_gradient["light"],
          color: colorMode === "light" ? "gray.100" : "gray.900",
        }}
      />
    </Container>
  );
};

export default FaceSwapHeader;
