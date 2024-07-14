import { useState, useEffect, useRef, useCallback } from "react";
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
  const pageSize = 15;
  const pageIndex = useRef(0);
  const { MainDeck, ExtraDeck, SideDeck } = useDeckStore();
  const { setMainDeckCard, editMainDeckCard } = useMainDeckCard();
  const { setExtraDeckCard, editExtraDeckCard } = useExtraDeckCard();
  const { setSideDeckCard, editSideDeckCard } = useSideDeckCard();

  const loadMoreCards = useCallback(() => {
    const newPageIndex = pageIndex.current + 1;
    const startIndex = newPageIndex * pageSize;

    if (startIndex < card.data.length) {
      const newCards = card.data.slice(startIndex, startIndex + pageSize);
      setLoadedCards((prevCards) => [...prevCards, ...newCards]);
      pageIndex.current = newPageIndex;
    } else {
      console.log("No more cards to load");
    }
  }, [card.data]);

  useEffect(() => {
    if (card.data && card.data.length > 0) {
      const initialLoad = card.data.slice(0, pageSize);
      setLoadedCards(initialLoad);
      setSelectedCard(card.data[0] || null);
      pageIndex.current = 0;
    }
  }, [card.data, pageSize]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("Loading more cards...");
            loadMoreCards();
          }
        });
      },
      { threshold: 0.1 } // Adjust as necessary
    );

    const currentRef = loadMoreRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [loadMoreCards]);

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
        base: "70px 70px 1fr 1fr 1fr",
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
      <GridItem area={"detail"}>
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
      <GridItem area={"main"}>
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
          maxH={{ base: "95px", md: "465px" }}
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
      <GridItem area={"extra"}>
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
          maxH={{ base: "95px", md: "120px" }}
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
      <GridItem area={"side"}>
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
          maxH={{ base: "95px", md: "100px" }}
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
      <GridItem area={"card"}>
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
          maxH={{ base: "50px", md: "465px" }}
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
          <div ref={loadMoreRef} style={{ height: "1px", width: "100%" }} />
        </Box>
      </GridItem>
      <GridItem area={"fav"}>
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
          maxH={{ base: "50px", md: "250px" }}
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
