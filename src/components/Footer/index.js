import { Box, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

function Footer() {
  return (
    <Box
      as="footer"
      height="50px"
      overflow="hidden"
      bg="gray.800"
      color="white"
      display="flex"
      alignItems="center"
      px={4}
    >
      <Text
        animation={`${marquee} 10s linear infinite`}
        fontSize={{ base: "sm", md: "lg" }}
      >
        © 2024 SUPAKPONG. All rights reserved.
      </Text>
    </Box>
  );
}

export default Footer;
