import { useState, useEffect, useRef } from "react";
import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import CardList from "../CardList";
import FavoriteList from "../FavoriteList";
import { useCardListStore } from "../../stores/CardListStore";
import { useFavoriteStore } from "../../stores/CardFavStore";
import { setDeckType } from "../../utils/optionList";
import DetailCard from "../DetailCard";
import { useDeckStore } from "../../stores/CardDeckStore";
import {
  useMainDeckCard,
  useExtraDeckCard,
  useSideDeckCard
} from "../../components/DeckList/DeckList.hook";
import DeckList from "../DeckList";

export default function MainDeckBuilderPage() {
  const { card } = useCardListStore();
  const { Favorite } = useFavoriteStore();
  const [loadedCards, setLoadedCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const loadMoreRef = useRef(null);
  const pageSize = 4;
  const pageIndex = useRef(0);
  const { MainDeck, ExtraDeck, SideDeck } = useDeckStore();
  const { setMainDeckCard, editMainDeckCard } = useMainDeckCard();
  const { setExtraDeckCard, editExtraDeckCard } = useExtraDeckCard();
  const { setSideDeckCard, editSideDeckCard } = useSideDeckCard();

  useEffect(() => {
    if (card.data) {
      const initialLoad = card.data.slice(0, pageSize);
      setLoadedCards(initialLoad);
      setSelectedCard(card.data[0]);
    }
  }, [card.data, pageSize]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          loadMoreCards();
        }
      },
      { threshold: 1.0 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [loadedCards]);

  const loadMoreCards = () => {
    const newPageIndex = pageIndex.current + 1;
    const startIndex = newPageIndex * pageSize;
    const newCards = card.data.slice(startIndex, startIndex + pageSize);
    setLoadedCards((prevCards) => [...prevCards, ...newCards]);
    pageIndex.current = newPageIndex;
  };

  return (
    <Grid
      templateAreas={{
        base: `"card card"
               "fav fav"
               "detail main"
               "detail extra"
               "detail side"`,
        md: `"detail main card"
            "detail extra fav"
            "detail side fav"`
      }}
      gridTemplateRows={{
        base: "100px 100px 1fr 1fr 1fr",
        md: "1fr 140px 140px"
      }}
      gridTemplateColumns={{
        base: "1fr 1fr",
        md: "300px 1fr 300px"
      }}
      h="100%"
      gap="2"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem bg="orange.300" area={"detail"}>
        <DetailCard
          data={selectedCard}
          onClick={() => {
            const { mainDeckTypes, extraDeckTypes } = setDeckType;

            if (!setDeckType.otherTypes.includes(selectedCard.type)) {
              if (
                mainDeckTypes.includes(selectedCard.type) &&
                MainDeck.data.length < 40
              ) {
                setMainDeckCard(selectedCard);
              } else if (
                extraDeckTypes.includes(selectedCard.type) &&
                ExtraDeck.data.length < 15
              ) {
                setExtraDeckCard(selectedCard);
              } else if (
                extraDeckTypes.includes(selectedCard.type) &&
                SideDeck.data.length < 15
              ) {
                setSideDeckCard(selectedCard);
              }
            }
          }}
        />
      </GridItem>
      <GridItem bg="green.300" area={"main"}>
        <Text>{`Main Deck : ${MainDeck.data.length}/40`}</Text>
        <Box
          bg="white"
          position="sticky"
          display="flex"
          flexWrap="wrap"
          top="0"
          right="0"
          left="0"
          w="100%"
          h="calc(100%)"
          maxH={{ base: "120px", md: "465px" }}
          overflowY="auto"
          boxShadow="sm"
          transition="box-shadow 0.2s ease, background-color 0.2s ease"
        >
          {MainDeck.data.map((item, index) => (
            <DeckList
              key={`card-${item.id}`}
              data={item}
              index={index}
              edit={(index) => {
                editMainDeckCard(index);
              }}
            />
          ))}
        </Box>
      </GridItem>
      <GridItem bg="yellow.300" area={"extra"}>
        <Text>{`Extra Deck : ${ExtraDeck.data.length}/15`}</Text>
        <Box
          bg="white"
          position="sticky"
          display="flex"
          flexWrap="wrap"
          top="0"
          right="0"
          left="0"
          w="100%"
          h="calc(100%)"
          maxH={{ base: "120px", md: "116px" }}
          overflowY="auto"
          boxShadow="sm"
          transition="box-shadow 0.2s ease, background-color 0.2s ease"
        >
          {ExtraDeck.data.map((item, index) => (
            <DeckList
              key={`card-${item.id}`}
              data={item}
              index={index}
              edit={(index) => {
                editExtraDeckCard(index);
              }}
            />
          ))}
        </Box>
      </GridItem>
      <GridItem bg="red.300" area={"side"}>
        <Text>{`Side Deck : ${SideDeck.data.length}/15`}</Text>
        <Box
          bg="white"
          position="sticky"
          display="flex"
          flexWrap="wrap"
          top="0"
          right="0"
          left="0"
          w="100%"
          h="calc(100%)"
          maxH={{ base: "120px", md: "116px" }}
          overflowY="auto"
          boxShadow="sm"
          transition="box-shadow 0.2s ease, background-color 0.2s ease"
        >
          {SideDeck.data.map((item, index) => (
            <DeckList
              key={`card-${item.id}`}
              data={item}
              index={index}
              edit={(index) => {
                editSideDeckCard(index);
              }}
            />
          ))}
        </Box>
      </GridItem>
      <GridItem bg="pink.300" area={"card"}>
        CardList
        <Box
          bg="white"
          position="sticky"
          display="flex"
          flexWrap="wrap"
          top="0"
          right="0"
          left="0"
          w="100%"
          h={{ base: "calc(100%)" }}
          maxH={{ base: "80px", md: "465px" }}
          overflowY="auto"
          boxShadow="sm"
          transition="box-shadow 0.2s ease, background-color 0.2s ease"
        >
          {loadedCards.map((item) => (
            <CardList
              key={`card-${item.id}`}
              data={item}
              onClick={() => setSelectedCard(item)}
            />
          ))}
          <div ref={loadMoreRef} />
        </Box>
      </GridItem>
      <GridItem bg="blue.300" area={"fav"}>
        FavoriteList
        <Box
          bg="white"
          position="sticky"
          display="flex"
          flexWrap="wrap"
          top="0"
          right="0"
          left="0"
          w={{ base: "100%" }}
          h={{ base: "calc(100%)" }}
          maxH={{ base: "80px", md: "265px" }}
          overflowY="auto"
          boxShadow="sm"
          transition="box-shadow 0.2s ease, background-color 0.2s ease"
        >
          {Favorite.data.map((item, index) => (
            <FavoriteList
              key={`card-${item.id}`}
              data={item}
              index={index}
              onClick={() => setSelectedCard(item)}
            />
          ))}
        </Box>
      </GridItem>
    </Grid>
  );
}
