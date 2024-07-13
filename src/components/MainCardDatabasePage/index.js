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
import { useCardListStore } from "../../stores/CardListStore";

export default function MainCardDatabasePage({ data }) {
  useCardListStore();
  const { setFavoriteCard } = useFavoriteCard();

  const handleClick = () => {
    setFavoriteCard(data);
  };

  if (!data) {
    return <Box>No data available</Box>;
  }

  return (
    <Card
      direction={{ base: "row" }}
      w="100%"
      maxH={{ base: "150px", sm: "185px" }}
      overflow="hidden"
      variant="outline"
      key={data.id}
    >
      {data.card_images && data.card_images[0] && (
        <Image
          objectFit="cover"
          maxW={{ base: "100%" }}
          maxH={{ base: "150px", sm: "185px" }}
          src={data.card_images[0].image_url_small}
          alt={data.name}
        />
      )}
      <Stack
        flex="1"
        position="sticky"
        h="calc(20vh)"
        overflowY="auto"
        boxShadow="sm"
        transition="box-shadow 0.2s ease, background-color 0.2s ease"
        bg="white"
        top="0"
        right="0"
        left="0"
        w="100%"
        p="1"
      >
        <CardBody pt="0">
          <Heading fontSize={{ base: "12px", sm: "20px" }} mb="auto">
            {data.name}
          </Heading>
          <Flex gap={0} display="flex" flexDir="column">
            <Box gap={1} display="flex" flexDir="row">
              <Text
                py="1"
                fontSize={{ base: "10px", sm: "15px" }}
              >{`[ ${data.type} ]`}</Text>
              <Text py="1" fontSize={{ base: "10px", sm: "15px" }}>
                {data.race}
              </Text>
              <Text py="1" fontSize={{ base: "10px", sm: "15px" }}>
                {data.attribute}
              </Text>
            </Box>
            <Box gap={1} display="flex" flexDir="row">
              <Text
                py="1"
                fontSize={{ base: "10px", sm: "15px" }}
              >{`ATK : ${data.atk}`}</Text>
              <Text
                py="1"
                fontSize={{ base: "10px", sm: "15px" }}
              >{`DEF : ${data.def}`}</Text>
            </Box>
          </Flex>
          <Text py="1" fontSize={{ base: "10px", sm: "15px" }}>
            {data.desc}
          </Text>
        </CardBody>
      </Stack>
      <Box flex="0" display="flex" alignItems="center">
        <Button
          variant="ghost"
          aria-label="Add to Favorite"
          size="md"
          height="40px"
          width="20px"
          onClick={handleClick}
        >
          <AddIcon />
        </Button>
      </Box>
    </Card>
  );
}
