import React from "react";
import {
  Box,
  Button,
  Grid,
  GridItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Text,
} from "@chakra-ui/react";

function Home() {
  return (
    <Grid
      templateAreas={`"header"
                        "main"
                        "footer"`}
      gridTemplateRows={"15vh 70vh 15vh"}
      backgroundColor={"#1B1928"}
      height={"100vh"}
    >
      <GridItem bg="orange.300" area={"header"}>
        <Menu>
          <MenuButton>Open menu</MenuButton>
          <Portal>
            <MenuList>
              <MenuItem>Times</MenuItem>
              <MenuItem>Times</MenuItem>
              <MenuItem>Open Closed Tab</MenuItem>
              <MenuItem>Open File</MenuItem>
            </MenuList>
          </Portal>
        </Menu>
        Header
      </GridItem>
      <GridItem bg="green.300" area={"main"}>
        Main
      </GridItem>
      <GridItem bg="blue.300" area={"footer"}>
        Footer
      </GridItem>
    </Grid>
  );
}

export default Home;
