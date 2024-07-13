import { Grid, GridItem, Center, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { baseICON } from "../../utils/constant";
import NavBar from "../../components/NavBar";
import SearchForm from "../../components/SearchForm";
import MainDeckBuilderPage from "../../components/MainDeckBuilderPage";
import Footer from "../../components/Footer";

export default function DeckBuilderPage() {
  const area = {
    base: `"header "
            "nav "
            "main "
            "footer"`,
  };
  const TemplateCol = { base: "1fr" };
  const TemplateRow = { base: "80px 40px 1fr 50px" };

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
            <Image src={baseICON} alt="icon" w={{ base: "80px" }} />
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
        <MainDeckBuilderPage />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}
