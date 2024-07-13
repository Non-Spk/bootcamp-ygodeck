import {
  Box,
  Image,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon,
  Spacer
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";

export default function MainHomePage() {
  const FontSizeHeader = { base: "md", sm: "md", md: "lg" };
  const FontSizeText = { base: "sm", sm: "sm", md: "md" };

  return (
    <Flex flexDir={{ base: "column", sm: "row" }} alignItems="center">
      <Image
        src="/images/Number.39_.Utopia.removeBG.png"
        alt="Image"
        h="auto"
        w={{ base: "80%", sm: "50%", md: "40%" }}
        maxH="850px"
        maxW="850px"
      />
      <Box bgColor="" justifyContent="center" alignContent="center" p={4}>
        <Text
          fontSize={FontSizeHeader}
          textAlign={{ base: "center", sm: "left" }}
        >
          Welcome to Yugi Deck Organizer! The website that makes organizing and
          managing your Yugi cards easy.
        </Text>
        <Spacer h="20px" />
        <Text fontSize={FontSizeText} textAlign="left">
          Key Features:
        </Text>
        <List spacing={3} fontSize={FontSizeText} textAlign="left">
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Card Management: Easily add, edit, or remove cards.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Search and Filter: Quickly find the cards you need.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Categorize: Manage cards by type and rarity.
          </ListItem>
          <ListItem>
            <ListIcon as={CheckIcon} color="green.500" />
            Deck Building: Create and manage your decks all in one place.
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}
