import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider, Box, Center } from "@chakra-ui/react";
import theme from "./utils/theme";
import HomePage from "./pages/HomePage";
import CardDatabasePage from "./pages/CardDatabasePage";
import DeckBuilderPage from "./pages/DeckBuilderPage";

export default function App() {
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
    }
  ]);

  const width = { base: "95%" };

  return (
    <ChakraProvider theme={theme}>
      <Box
        bgImg="url('/images/background.jpg')"
        bgSize="cover"
        bgPos="center"
        minH="100vh"
        minW="320px"
        w="100%"
        overflow="hidden"
      >
        <Center>
          <Box
            w={width}
            minW="320px"
            minH="100vh"
            color="PeriwinkleGray.font"
            position="relative"
            overflowX="hidden"
            overflowY="auto"
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
              overflowY="auto"
            />
            <Box
              w="100%"
              h="100%"
              position="absolute"
              top="0"
              left="0"
              zIndex="1"
              overflowY="auto"
            >
              <RouterProvider router={router} />
            </Box>
          </Box>
        </Center>
      </Box>
    </ChakraProvider>
  );
}
