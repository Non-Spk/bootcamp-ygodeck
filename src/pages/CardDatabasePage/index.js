import { useState, useEffect, useRef } from "react";
import { Grid, GridItem, Center, Image, Box, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { baseICON } from "../../utils/constant";
import NavBar from "../../components/NavBar";
import SearchForm from "../../components/SearchForm";
import MainCardDatabasePage from "../../components/MainCardDatabasePage";
import Footer from "../../components/Footer";
import { useCardListStore } from "../../stores/CardListStore";

export default function CardDatabasePage() {
  const area = {
    base: `"header "
            "nav "
            "main "
            "footer"`
  };
  const TemplateCol = { base: "1fr" };
  const TemplateRow = {
    base: "30px 25px 1fr 18px",
    sm: "40px 30px 1fr 20px",
    md: "50px 45px 1fr 22px",
    lg: "60px 60px 1fr 24px",
    xl: "70px 75px 1fr 26px",
    "2xl": "90px 40px 1fr 28px"
  };
  const IconSize = {
    base: "60px",
    sm: "80px",
    md: "100px",
    lg: "100px",
    xl: "110px",
    "2xl": "120px"
  };

  const { card } = useCardListStore();
  const cardsPerPage = 15;
  const [, setCurrentPage] = useState(1);
  const loadMoreRef = useRef(null);
  const [loadedCards, setLoadedCards] = useState([]);

  useEffect(() => {
    if (card.data) {
      const initialLoad = card.data.slice(0, cardsPerPage);
      setLoadedCards(initialLoad);
    }
  }, [card.data, cardsPerPage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCurrentPage((prevPage) => {
            const nextPage = prevPage + 1;
            if (nextPage <= Math.ceil(card.data.length / cardsPerPage)) {
              const nextCards = card.data.slice(
                (nextPage - 1) * cardsPerPage,
                nextPage * cardsPerPage
              );
              setLoadedCards((prevCards) => [...prevCards, ...nextCards]);
            }
            return nextPage;
          });
        }
      },
      { threshold: 1.0 }
    );

    const observerTarget = loadMoreRef.current;
    if (observerTarget) {
      observer.observe(observerTarget);
    }

    return () => {
      if (observerTarget) {
        observer.unobserve(observerTarget);
      }
    };
  }, [card.data, cardsPerPage]);

  if (!card || !card.data) {
    return <Box>No cards available</Box>;
  }

  return (
    <Grid
      templateAreas={area}
      gridTemplateRows={TemplateRow}
      gridTemplateColumns={TemplateCol}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem area={"header"}>
        <Center>
          <Link to="/">
            <Image src={baseICON} alt="icon" w={IconSize} />
          </Link>
        </Center>
      </GridItem>
      <GridItem area={"nav"} pos="relative">
        <Box pos="absolute" top="0" left="1">
          <NavBar />
        </Box>
        <Box pos="absolute" top="0" right="1">
          <SearchForm />
        </Box>
      </GridItem>
      <GridItem area={"main"}>
        <Box
          bg="white"
          position="sticky"
          top="0"
          right="0"
          left="0"
          w="100%"
          h={{
            base: "calc(80vh)",
            sm: "calc(80vh)",
            md: "calc(80vh)",
            lg: "calc(80vh)",
            xl: "calc(80vh)",
            "2xl": "calc(80vh)"
          }}
          overflowY="auto"
          p="2"
          boxShadow="sm"
          transition="box-shadow 0.2s ease, background-color 0.2s ease"
        >
          <Stack>
            {loadedCards.map((item) => (
              <MainCardDatabasePage key={`card-${item.id}`} data={item} />
            ))}
            <div ref={loadMoreRef} style={{ height: "20px" }} />{" "}
          </Stack>
        </Box>
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}
