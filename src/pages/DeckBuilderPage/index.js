import { Grid, GridItem, Image, Flex, Box } from "@chakra-ui/react";
import { baseICON } from "../../utils/constant";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import BackBar from "../../components/BackBar";
import SearchForm from "../../components/SearchForm";
import MainDecksBuilder from "../../components/MainDecksBuilder";

function DecksBuilderPage() {
  return (
    <Grid
      templateAreas={{
        base: `"header"
               "nav"
               "main"
               "footer"`,
        md: `"header nav"
             "main main"
             "footer footer"`
      }}
      gridTemplateRows={{ base: "auto 1fr auto auto", md: "auto 1fr auto" }}
      gridTemplateColumns={{ base: "1fr", md: "auto 1fr" }}
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
        <Flex flexDir={{ base: "column", md: "row" }}>
          <Box>
            <SearchForm />
          </Box>
          <BackBar />
        </Flex>
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <MainDecksBuilder />
      </GridItem>
      <GridItem pl="2" area={"footer"} overflow="hidden" width="100%">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default DecksBuilderPage;
