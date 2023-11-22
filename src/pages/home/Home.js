import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "../../components/Header";
import Main from "../../components/Main";

function Home() {
  return (
    <Grid
      templateAreas={`"header"
                        "main"`}
      gridTemplateRows={"10vh 90vh"}
      backgroundColor={"#2B2C2D"}
      height={"100vh"}
    >
      <GridItem bg="gray.700" color={"white"} area={"header"}>
        <Header />
      </GridItem>
      <GridItem bg="gray.100" area={"main"}>
        <Main />
      </GridItem>
    </Grid>
  );
}

export default Home;
