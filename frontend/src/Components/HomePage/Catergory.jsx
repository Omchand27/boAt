import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Catergory = () => {
  const Category = [
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
    },
    {
      title: "True Wireless Earbuds",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Airdopes_06c1d467-6060-4e4d-9116-edf9ce9155a7_small.png?v=1674041615",
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
            <Flex border="1px solid red">
              <Text fontWeight="bold">{ele.title}</Text>
              <Image src={ele.img} />
            </Flex>
          );
        })}
      </Box>
    </Box>
  );
};

export default Catergory;
