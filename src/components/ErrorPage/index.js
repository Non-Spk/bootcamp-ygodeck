import { Box, Center, Image } from "@chakra-ui/react";

function ErrorPage() {
  return (
    <Center h="100vh">
      <Box w={{ base: "90%", md: "70%", lg: "50%" }}>
        <Image
          src="/images/WebError.png"
          alt="Error Page"
          objectFit="contain"
          width="100%"
          height={{ base: "auto", md: "90vh" }}
          opacity="1"
        />
      </Box>
    </Center>
  );
}

export default ErrorPage;
