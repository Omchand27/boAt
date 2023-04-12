import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Offer = () => {
  const extra = [
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_2_small.png?v=1663586590",
      title: "1 YEAR WARRANTY",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_3_small.png?v=1663586612",
      title: "FREE 7 DAYS REPLACEMENT",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_1_small.png?v=1663586576",
      title: "FREE SHIPPING",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/promise_icon_4_small.png?v=1663586627",
      title: "SECURE PAYMENTS",
    },
    {
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/files/icon-black-v1_small.png?v=1661245767",
      title: "GST BILLING",
    },
  ];

  return (
    <Flex
      display="grid"
      bg="#e8edf0"
      w="95%"
      h="10vh"
      m="auto"
      mt="1%"
      gridTemplateColumns={{
        base:"repeat(2, 1fr)",
        sm: "repeat(5, 1fr)",
        md: "repeat(5, 1fr)",
        lg: "repeat(5, 1fr)",
      }}
      gap="2%"
    >
      {extra &&
        extra.map((ele) => {
          return (
            <Flex h="10vh">
              <Image src={ele.img} />
              <Text m="auto" fontWeight="bold">
                {ele.title}
              </Text>
            </Flex>
          );
        })}
    </Flex>
  );
};

export default Offer;
