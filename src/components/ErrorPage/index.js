import { Box, Center, Image } from "@chakra-ui/react";

function ErrorPage() {
  return (
    <Center h="100vh">
      <Box>
        <Image
          src="/images/WebError.png"
          alt="Error Page"
          objectFit="contain"
          width="100%"
          height="90vh"
          opacity="1"
        />
      </Box>
    </Center>
  );
}

export default ErrorPage;
