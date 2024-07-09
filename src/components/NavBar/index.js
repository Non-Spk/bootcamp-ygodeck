import { Box, Stack, Button } from "@chakra-ui/react";
import { MdCall } from "react-icons/md";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      h="100%"
      w="100%"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={5}
        h={{ base: "auto", md: "50%" }}
      >
        <Link to="/card-database">
          <Button
            colorScheme="blue"
            variant="solid"
            fontSize={{ base: "16px", md: "18px" }}
            px="10"
            minH="20px"
            h={{ base: "auto", md: "100%" }}
            borderRadius="md"
            color="black"
          >
            DATABASE
          </Button>
        </Link>
        <Link to="/deck-builder">
          <Button
            colorScheme="blue"
            variant="solid"
            fontSize={{ base: "16px", md: "20px" }}
            px="10"
            minH="20px"
            h={{ base: "auto", md: "100%" }}
            borderRadius="md"
            color="black"
          >
            BUILDER
          </Button>
        </Link>
        <Link to="/contact-me">
          <Button
            rightIcon={<MdCall />}
            colorScheme="blue"
            variant="solid"
            fontSize={{ base: "16px", md: "20px" }}
            px="10"
            minH="20px"
            h={{ base: "auto", md: "100%" }}
            borderRadius="md"
            color="black"
          >
            CONTACT ME
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default NavBar;
