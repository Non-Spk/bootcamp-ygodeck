import { Card, Image, Box, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";
import useFavoriteCard from "../../components/FavoriteCard/FavoriteCard.hook";

export default function FavoriteList({ data, index, onClick }) {
  const { editFavoriteCard } = useFavoriteCard();
  const imageUrl = data?.card_images?.[0]?.image_url_small || "";
  const cardName = data?.name || "";

  const handleClickClose = (index) => {
    editFavoriteCard(index);
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="100"
      h="80px"
      cursor="pointer"
      onClick={onClick}
      pos="relative"
    >
      <Image
        objectFit="cover"
        h={{ base: "100%" }}
        src={imageUrl}
        alt={cardName}
      />
      <Box pos="absolute">
        <Button
          onClick={() => handleClickClose(index)}
          cursor="pointer"
          variant="ghost"
          aria-label="Add to Favorite"
          size="lg"
          h="1px"
          w="1px"
          top="-1"
          right="-5"
        >
          <CloseIcon />
        </Button>
      </Box>
    </Card>
  );
}
