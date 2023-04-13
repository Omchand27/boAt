import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Catergory = () => {
  
  const Category = [
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "Neckbands",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Neckbands_06214c1a-5e30-48ea-ac14-4a6bff679f48_small.png?v=1674126581",
    },
    {
      title: "Smart Watches",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Smartwatch_96457e1e-dfc6-4818-b6f1-a9a7130d018c_small.png?v=1674127383",
    },
    {
      title: "Wireless Headphones",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Rockerz_6c017fdd-66fd-4d00-a1c9-5fd3f8536ee1_small.png?v=1674041615",
    },
    {
      title: "Wireless Speakers",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Stone_1321db16-d197-40bd-be00-d165868168eb_small.png?v=1674126200",
    },
    {
      title: "Wired Headphones",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/bassheads-Wired-Headphones_0877b292-85ab-42ed-a055-26e1c246be73_small.png?v=1674041616",
    },
    {
      title: "Wired Earphones",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Basshead_small.png?v=1674041616",
    },
    {
      title: "Soundbars",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/aavante-bar_small.png?v=1674041615",
    },
    {
      title: "Gaming Headphones",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Immortals_dbb4a363-0799-44e3-8b67-a275b092c501_small.png?v=1674041615",
    },
    {
      title: "Party Speakers",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/sound_bar_4f111a6a-2482-41c8-87f2-db7e0ee19e69_small.webp?v=1674041615",
    },
    {
      title: "Trimmers",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/misfit_3b8fc3eb-52d6-4519-824f-22873770f747_small.png?v=1674041616",
    },
    {
      title: "Chargers",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Charger_small.png?v=1674041615",
    },
    {
      title: "Power banks",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/powerbank_small.png?v=1674126228",
    },
    {
      title: "Cables",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/cables_cd468fe0-9b41-4eef-b686-0785c6478534_small.png?v=1674041615",
    },
    {
      title: "Car Accessories",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Car-accessories_07e4e533-2b59-4597-aa3f-110552541f0f_small.png?v=1674041615",
    },
    {
      title: "TRebel Range",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Trebel_small.png?v=1674126241",
    },
    {
      title: "Limited Editions",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/limited-edition_small.png?v=1674126214",
    },
    {
      title: "View All",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/logo123_171ada23-0c67-477b-84d1-21fe1bad3909_small.png?v=1674022741",
    },
  ];

  return (
    <Box w="95%" m="auto" mt="2%">
      <Heading size="md">Shop By Category</Heading>
      <Box
        display="grid"
        gridTemplateColumns={{
          sm: "repeat(3, 1fr)",
          md: "repeat(5, 1fr)",
          lg: "repeat(7, 1fr)",
        }}
        gap="20px"
        mt="1%"
      >
        {Category.map((ele) => {
          return (
            <Flex bg="#efefef" p="2%" borderRadius="5%">
              <Text fontWeight="bold" fontSize="12px">
                {ele.title}
              </Text>
              <Image h="10vh" src={ele.img} />
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
};

export default Catergory;
