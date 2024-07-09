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
        minH="100vh"
        minW="320px"
        maxW="100%"
        overflow="hidden"
      >
        <Center>
          <Box
            w={{ base: "90%", md: "80%", lg: "70%" }}
            minW="320px"
            minH="100vh"
            p={{ base: 2, md: 4 }}
            color="PeriwinkleGray.font"
            position="relative"
            overflow="hidden"
          >
            <Box
              bg="PeriwinkleGray.bg"
              opacity="0.75"
              w="100%"
              h="100%"
              position="absolute"
              top="0"
              left="0"
              zIndex="0"
            />
            <Box
              w="100%"
              h="100%"
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
