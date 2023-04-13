import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import DailyDeals from "./DailyDeals";

const BestOfBoat = ({ title }) => {
  return (
    <Box w="95%" m="auto" mt="2%">
      <Heading size="md">{title}</Heading>
      <Flex mt="2%">
        <Tabs variant="soft-rounded" colorScheme="green">
          <TabList>
            <Tab color="black" fontSize="20px" fontWeight="bold">
              Best Sellers
            </Tab>
            <Tab color="black" fontSize="20px" fontWeight="bold">
              Top Earbuds
            </Tab>
            <Tab color="black" fontSize="20px" fontWeight="bold">
              Trending Wireless
            </Tab>
            <Tab color="black" fontSize="20px" fontWeight="bold">
              Trending ANC
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <DailyDeals wid={"100%"} />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <p>four!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Box>
  );
};

export default BestOfBoat;
