import { GlobalContextProvider } from "../contexts/global";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../styles/theme";
import "../css/main.css";

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContextProvider>
      <ChakraProvider theme={theme} resetCSS>
        <Component {...pageProps} />
      </ChakraProvider>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: "Roboto Mono", monospace;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </GlobalContextProvider>
  );
}

export default MyApp;
