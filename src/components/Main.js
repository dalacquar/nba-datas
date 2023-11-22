import React from "react";
import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import PlayersTable from "./PlayersTable.js";

function Main() {
  return (
    <Box>
      <Tabs position="relative" variant="unstyled">
        <TabList bgColor={"gray.300"}>
          <Tab>Times</Tab>
          <Tab>Jogadores</Tab>
          <Tab>Estátisticas</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="red.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel>
            <p>Times!</p>
          </TabPanel>
          <TabPanel>
            <PlayersTable></PlayersTable>
          </TabPanel>
          <TabPanel>
            <p>Estátisticas!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default Main;
