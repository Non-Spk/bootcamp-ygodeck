import { Box, Text } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const marquee = keyframes`
  0% {
    transform: translateX(150%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export default function Footer() {
  return (
    <Box
      as="footer"
      height={{
        base: "18px",
        sm: "20px",
        md: "22px",
        lg: "24px",
        xl: "26px",
        "2xl": "28px"
      }}
      overflow="hidden"
      bg="gray.800"
      color="white"
      display="flex"
      alignItems="center"
      px={4}
    >
      <Text
        animation={`${marquee} 10s linear infinite`}
        fontSize={{
          base: "8px",
          sm: "10px",
          md: "12px",
          lg: "14px",
          xl: "16px",
          "2xl": "18px"
        }}
      >
        © 2024 SUPAKPONG. All rights reserved.
      </Text>
    </Box>
  );
}
