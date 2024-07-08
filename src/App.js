import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, Box, Center } from "@chakra-ui/react";
import theme from "./utils/theme";
import HomePage from "./pages/HomePage";
import CardDatabasePage from "./pages/CardDatabasePage";
import DeckBuilderPage from "./pages/DeckBuilderPage";
import ContactMePage from "./pages/ContactMePage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/card-database",
      element: <CardDatabasePage />
    },
    {
      path: "/deck-builder",
      element: <DeckBuilderPage />
    },
    {
      path: "/contact-me",
      element: <ContactMePage />
    }
  ]);

  return (
    <ChakraProvider theme={theme}>
      <Box
        bgImg="url('/images/background.jpg')"
        bgSize="cover"
        bgPos="center"
        w="100%"
        h="100vh"
        minW="720px"
        maxW="100%"
        maxH="100vh"
        overflow="hidden"
      >
        <Center>
          <Box
            w="80%"
            minW="720px"
            minH="100vh"
            h="auto"
            p={4}
            color="PeriwinkleGray.font"
            position="relative"
            overflow="hidden"
          >
            <Box
              bg="PeriwinkleGray.bg"
              opacity="0.75"
              minW="100%"
              minH="100%"
              h="auto"
              position="absolute"
              top="0"
              left="0"
              zIndex="0"
            />
            <Box
              minW="100%"
              minH="100%"
              h="auto"
              position="absolute"
              top="0"
              left="0"
              zIndex="1"
            >
              <RouterProvider router={router} />
            </Box>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
}

export default App;
