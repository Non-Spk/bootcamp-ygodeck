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
    <Flex flexDir="row">
      <Image
        src="/images/Number.39_.Utopia.removeBG.png"
        alt="Image"
        h="100%"
        w="100%"
        maxH="850px"
        maxW="850px"
      />
      <Box bgColor="" justifyContent="center" alignContent="center">
        <Text fontSize="2xl">
          Welcome to Yugi Deck Organizer! The website that makes organizing and
          managing your Yugi cards easy.
        </Text>
        <Text fontSize="xl">Key Features:</Text>
        <List spacing={3} fontSize="xl">
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
