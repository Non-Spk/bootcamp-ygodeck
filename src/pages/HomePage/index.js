import { Grid, GridItem, Center, Image, Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { baseICON } from "../../utils/constant";
import NavBar from "../../components/NavBar";
import MainHomePage from "../../components/MainHomePage";
import Footer from "../../components/Footer";

export default function HomePage() {
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
        <Box
          pos="absolute"
          top="0"
          left={{ base: "1", sm: "auto" }}
          right={{ base: "auto", sm: "1" }}
        >
          <NavBar />
        </Box>
      </GridItem>
      <GridItem area={"main"}>
        <MainHomePage />
      </GridItem>
      <GridItem area={"footer"}>
        <Footer />
      </GridItem>
    </Grid>
  );
}
