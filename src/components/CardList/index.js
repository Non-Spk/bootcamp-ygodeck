import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";

function CardList({ data, onClick }) {
  const imageUrl = data?.card_images?.[0]?.image_url_small || "";
  const cardName = data?.name || "";
  const cardType = data?.type || "";
  const cardAttribute = data?.attribute || "";
  const cardRace = data?.race || "";

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="400px"
      h="100px"
      cursor="pointer"
      onClick={onClick}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={imageUrl}
        alt={cardName}
      />
      <Stack>
        <CardBody>
          <Text fontSize="14px">{cardName}</Text>
          <Text fontSize="12px">{`${cardType}`}</Text>
          <Text fontSize="12px">{`${cardAttribute} ${cardRace}`}</Text>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default CardList;
