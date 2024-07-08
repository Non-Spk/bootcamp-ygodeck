import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Box,
  Button
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import useFavoriteCard from "../../components/FavoriteCard/FavoriteCard.hook";

function FavoriteList({ data, index, onClick }) {
  const { editFavoriteCard } = useFavoriteCard();
  const imageUrl = data?.card_images?.[0]?.image_url_small || "";
  const cardName = data?.name || "";
  const cardType = data?.type || "";
  const cardAttribute = data?.attribute || "";
  const cardRace = data?.race || "";

  const handleClickClose = (index) => {
    editFavoriteCard(index);
  };

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
      <Stack flex="1">
        <CardBody>
          <Text fontSize="14px">{cardName}</Text>
          <Text fontSize="12px">{`${cardType}`}</Text>
          <Text fontSize="12px">{`${cardAttribute} ${cardRace}`}</Text>
        </CardBody>
      </Stack>
      <Box flex="0" display="flex" alignItems="center">
        <Button
          onClick={() => handleClickClose(index)}
          cursor="pointer"
          variant="ghost"
          aria-label="Add to Favorite"
          size="lg"
          height="100px"
          width="100px"
        >
          <CloseIcon />
        </Button>
      </Box>
    </Card>
  );
}

export default FavoriteList;
