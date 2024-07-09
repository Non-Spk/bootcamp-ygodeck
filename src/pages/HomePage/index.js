import { Grid, GridItem, Image } from "@chakra-ui/react";
import { baseICON } from "../../utils/constant";
import NavBar from "../../components/NavBar";
import MainHomePage from "../../components/MainHomePage";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function HomePage() {
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
        <NavBar />
      </GridItem>
      <GridItem pl="2" area={"main"}>
        <MainHomePage />
      </GridItem>
      <GridItem pl="2" area={"footer"} overflow="hidden" width="100%">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default HomePage;
