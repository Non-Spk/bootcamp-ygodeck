import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Box,
  Button
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import useFavoriteCard from "../../components/FavoriteCard/FavoriteCard.hook";

function MainCardDatabasePage({ data }) {
  const {  setFavoriteCard } = useFavoriteCard();

  const handleClick = () => {
    setFavoriteCard(data);
  };

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      w="100%"
      overflow="hidden"
      variant="outline"
      key={data.id}
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "300px" }}
        maxH={{ base: "100%", sm: "250px" }}
        src={data.card_images[0].image_url_small}
        alt={data.name}
      />

      <Stack flex="1">
        <CardBody>
          <Heading size="md">{data.name}</Heading>
          <Flex gap={8}>
            <Text py="2">{`[ ${data.type} ]`}</Text>
            <Text py="2">{data.race}</Text>
            <Text py="2">{data.attribute}</Text>
            <Text py="2">{`ATK : ${data.atk}`}</Text>
            <Text py="2">{`DEF : ${data.def}`}</Text>
          </Flex>
          <Text py="2">{data.desc}</Text>
        </CardBody>
      </Stack>

      <Box flex="0" display="flex" alignItems="center">
        <Button
          variant="ghost"
          aria-label="Add to Favorite"
          size="lg"
          height="100px"
          width="100px"
          onClick={handleClick}
        >
          <AddIcon />
        </Button>
      </Box>
    </Card>
  );
}

export default MainCardDatabasePage;
