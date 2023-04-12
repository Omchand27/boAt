import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const DailyDeals = ({ title }) => {
  const Deals = [
    {
      title: "Airdopes 131",
      price: "999",
      rating: "4.8",
      discount: "67% off",
      strikeP: "2990",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103",
    },
    {
      title: "Airdopes 131",
      price: "999",
      rating: "4.8",
      discount: "67% off",
      strikeP: "2990",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103",
    },
    {
      title: "Airdopes 131",
      price: "999",
      rating: "4.8",
      discount: "67% off",
      strikeP: "2990",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103",
    },
    {
      title: "Airdopes 131",
      price: "999",
      rating: "4.8",
      discount: "67% off",
      strikeP: "2990",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103",
    },
    {
      title: "Airdopes 131",
      price: "999",
      rating: "4.8",
      discount: "67% off",
      strikeP: "2990",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/cream_300x.png?v=1668756103",
    },
  ];

  return (
    <Box w="95%" m="auto">
      <Heading size="md">{title}</Heading>
      <Text display="block" fontWeight="bold" as="u" textAlign="right">
        View All {">"}
      </Text>
      <Flex gap="20px">
        {Deals.map((ele) => {
          return (
            <Box border="1px solid red">
              <Image src={ele.img} />
              <Box
                w="95%"
                m="auto"
                mb="1%"
                border="1px solid red"
                p="2%"
                borderRadius="7%"
                lineHeight="200%"
              >
                <Text fontWeight="bold">{ele.title}</Text>
                <Flex gap="3%">
                  <Text fontWeight="bold">₹ {ele.price}</Text>
                  <Text color="green">{ele.discount}</Text>
                  <strike>₹ {ele.strikeP}</strike>
                </Flex>
                <hr />
                <Text>★{ele.rating} 1229 reviews</Text>
                <Text fontWeight="bold">₹15 Extra Discount on UPI</Text>
                <Button colorScheme="red" w="100%">
                  ADD TO CART
                </Button>
              </Box>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default DailyDeals;
