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
        <MainDecksBuilder />
      </GridItem>
      <GridItem pl="2" area={"footer"} overflow="hidden" width="100%">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default DecksBuilderPage;
