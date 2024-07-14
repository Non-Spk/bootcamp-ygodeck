import { Card, Image } from "@chakra-ui/react";

export default function CardList({ data, onClick }) {
  const imageUrl = data?.card_images?.[0]?.image_url_small || "";
  const cardName = data?.name || "";

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      w="100"
      h={{ base: "50px", md: "80px" }}
      cursor="pointer"
      onClick={onClick}
    >
      <Image
        objectFit="cover"
        h={{ base: "100%" }}
        src={imageUrl}
        alt={cardName}
      />
    </Card>
  );
}
