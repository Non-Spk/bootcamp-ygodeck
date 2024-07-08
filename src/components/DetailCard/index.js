import {
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  Divider,
  CardFooter,
  Button,
  Flex
} from "@chakra-ui/react";

function DetailCard({ data, onClick }) {
  const imageUrl = data?.card_images?.[0]?.image_url || "";
  const cardName = data?.name || "";
  const cardType = data?.type || "";
  const cardAttribute = data?.attribute || "";
  const cardRace = data?.race || "";
  const cardATK = data?.atk || "";
  const cardDEF = data?.def || "";
  const cardDesc = data?.desc || "";

  return (
    <Card maxW="sm" maxH="85vh">
      <CardBody>
        <Image src={imageUrl} alt={cardName} borderRadius="lg" />
        <Stack
          mt="6"
          spacing="3"
          bg="white"
          position="sticky"
          top="0"
          right="0"
          left="0"
          w="100%"
          h="calc(22vh)"
          overflowY="auto"
          p="2"
          boxShadow="sm"
          transition="box-shadow 0.2s ease, background-color 0.2s ease"
        >
          <Heading size="md">{cardName}</Heading>
          <Text>{`[${cardAttribute}] ${cardRace} / ${cardType} `}</Text>
          <Text>{cardDesc}</Text>
          <Flex gap={5}>
            <Text>{`ATK : ${cardATK}`}</Text>
            <Text>{`DEF : ${cardDEF}`}</Text>
          </Flex>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" colorScheme="blue" onClick={onClick}>
          Add to Deck
        </Button>
      </CardFooter>
    </Card>
  );
}

export default DetailCard;
