import {
  Image,
  Card,
  CardBody,
  Stack,
  Text,
  CardFooter,
  Button,
  Flex
} from "@chakra-ui/react";

export default function DetailCard({ data, onClick }) {
  const imageUrl = data?.card_images?.[0]?.image_url || "";
  const cardName = data?.name || "";
  const cardType = data?.type || "";
  const cardRace = data?.race || "";
  const cardATK = data?.atk || "";
  const cardDEF = data?.def || "";
  const cardDesc = data?.desc || "";

  return (
    <Card maxW="sm" maxH={{ base: "80vh", md: "85vh" }} overflow="hidden">
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
          h={{ base: "calc(80px)", sm: "calc(150px)", md: "calc(200px)" }}
          overflowY="auto"
          boxShadow="sm"
          transition="box-shadow 0.2s ease, background-color 0.2s ease"
        >
          <Text fontSize={{ base: "10px", md: "sm" }}>{cardName}</Text>
          <Text
            fontSize={{ base: "6px", md: "xs" }}
          >{`${cardRace} / ${cardType} `}</Text>
          <Text fontSize={{ base: "6px", md: "xs" }}>{cardDesc}</Text>
          <Flex gap={5} fontSize={{ base: "6px", md: "xs" }}>
            <Text>{`ATK : ${cardATK}`}</Text>
            <Text>{`DEF : ${cardDEF}`}</Text>
          </Flex>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          variant="solid"
          colorScheme="blue"
          onClick={onClick}
          boxSize={{ base: "15px", md: "100px" }}
          fontSize={{ base: "5px", md: "xs" }}
        >
          Add to Deck
        </Button>
      </CardFooter>
    </Card>
  );
}
