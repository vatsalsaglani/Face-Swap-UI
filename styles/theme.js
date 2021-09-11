// styles/theme.js
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
  fonts: {
    body: "Lobster",
  },
};

const theme = extendTheme({ config });

export default theme;
