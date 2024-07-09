import {
  Grid,
  GridItem,
  Image,
  Flex,
  Box,
  Stack,
  Button
} from "@chakra-ui/react";
import { baseICON } from "../../utils/constant";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import BackBar from "../../components/BackBar";
import MainCardDatabasePage from "../../components/MainCardDatabasePage";
import SearchForm from "../../components/SearchForm";
import { useCardListStore } from "../../stores/CardListStore";
import { useState } from "react";

function CardDatabasePage() {
  const { card } = useCardListStore();
  const cardsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = card.data.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(card.data.length / cardsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Grid
      templateAreas={`"header nav"
                      "main main"
                      "footer footer"`}
      gridTemplateRows={"auto 1fr auto"}
      gridTemplateColumns={"auto 1fr"}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" area={"header"}>
        <Link to="/">
          <Image src={baseICON} alt="icon" w="20%" minW="80px" />
        </Link>
      </GridItem>
      <GridItem pl="2" area={"nav"}>
        <Flex flexDir="row">
          <Box>
            <SearchForm />
          </Box>
          <BackBar />
        </Flex>
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <Stack>
          {currentCards.map((item) => (
            <MainCardDatabasePage key={`card-${item.id}`} data={item} />
          ))}
        </Stack>
        <Flex justify="center" mt={4} gap={5} align="center">
          <Button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            mr={2}
          >
            Previous
          </Button>
          <Box>{`${currentPage} / ${totalPages}`}</Box>
          <Button
            onClick={() => paginate(currentPage + 1)}
            disabled={indexOfLastCard >= card.data.length}
          >
            Next
          </Button>
        </Flex>
      </GridItem>
      <GridItem pl="2" area={"footer"} overflow="hidden" width="100%">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default CardDatabasePage;
