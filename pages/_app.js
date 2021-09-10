import { GlobalContextProvider } from "../contexts/global";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <ChakraProvider resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
    </GlobalContextProvider>
  );
}

export default MyApp;
