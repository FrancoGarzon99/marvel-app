import "../styles/globals.css";
import themeChakra from "../styles/themeChakra";
import Head from "next/head";
import {
  ChakraProvider,
  Heading,
  Text,
  Container,
  Stack,
  Divider,
  Link,
  StackDivider,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Marvel App</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
        {/* Start meta tags */}
        <meta content="Franco" name="author" />
        <meta content="Franco Garzon" name="copyright" />
        <meta content="Marvel App" />
        <meta content="marvel,hero,superhero" name="keywords" />
        {/* End meta tags */}
      </Head>
      <Container
        borderRadius="sm"
        layerStyle="container"
        maxWidth={{
          base: "sm",
          md: "container.md",
          xl: "container.md",
          xxl: "container.xl",
        }}
        padding={0}
      >
        <Stack spacing={0}>
          <Stack
            alignItems="center"
            layerStyle="card"
            padding={4}
            spacing={2}
            textAlign="center"
          >
            <Stack
              alignItems="baseline"
              aria-label="Cambiar modo de color"
              cursor="pointer"
              direction="row"
              fontSize={{ base: 20, md: 24 }}
              role="button"
              spacing={2}
              onClick={toggleColorMode}
            >
              <Text textStyle="soft">Marvel App 🙌</Text>
            </Stack>
          </Stack>
          <Component {...pageProps} />
        </Stack>
        <footer>
          <Box py={6} textAlign={"center"}>
            <Text>© 2021 Franco Garzon</Text>
          </Box>
        </footer>
      </Container>
    </>
  );
};

const AppContainer = (props: AppProps) => {
  return (
    <ChakraProvider theme={themeChakra}>
      <App {...props} />
    </ChakraProvider>
  );
};

export default AppContainer;
