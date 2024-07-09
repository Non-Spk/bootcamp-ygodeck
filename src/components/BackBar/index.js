import { Box, Stack, Button } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";

function BackBar() {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent={{ base: "center", md: "flex-end" }}
      h="100%"
      w="100%"
    >
      <Stack direction="row" spacing={5} h="50%">
        <Link to="/">
          <Button
            leftIcon={<MdArrowBack />}
            colorScheme="blue"
            variant="solid"
            fontSize={{ base: "sm", md: "20" }}
            px="10"
            minH="20px"
            h="100%"
            borderRadius="md"
            color="black"
          >
            BACK
          </Button>
        </Link>
      </Stack>
    </Box>
  );
}

export default BackBar;
