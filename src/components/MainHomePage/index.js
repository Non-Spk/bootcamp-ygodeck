import {
  Box,
  Image,
  Flex,
  Text,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

function MainHomePage() {
  return (
    <Flex flexDir={{ base: "column", md: "row" }} alignItems="center">
      <Image
        src="/images/Number.39_.Utopia.removeBG.png"
        alt="Image"
        h={{ base: "50%", md: "100%" }}
        w={{ base: "100%", md: "50%" }}
        maxH="850px"
        maxW="850px"
      />
      <Box bgColor="" justifyContent="center" alignContent="center" p={4}>
        <Text
          fontSize={{ base: "xl", md: "2xl" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Welcome to Yugi Deck Organizer! The website that makes organizing and
          managing your Yugi cards easy.
        </Text>
        <Text
          fontSize={{ base: "lg", md: "xl" }}
          textAlign={{ base: "center", md: "left" }}
        >
          Key Features:
        </Text>
        <List
          spacing={3}
          fontSize={{ base: "md", md: "xl" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Card Management: Easily add, edit, or remove cards.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Search and Filter: Quickly find the cards you need.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Categorize: Manage cards by type and rarity.
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color="green.500" />
            Deck Building: Create and manage your decks all in one place.
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
}

export default MainHomePage;
