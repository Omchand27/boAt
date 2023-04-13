import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box mt="2%">
      <Box bg="black">
        <Text color="white" w="73%" textAlign="center" m="auto" p="1%">
          India's fastest growing audio & wearables brand. The most incredible
          range of wireless earphones, earbuds, headphones, smart watches, and
          home audio. From workouts to adventures, boAt will get you sailing!
        </Text>
      </Box>

      <Flex w="95%" m="auto" mt="2%" gap="3%" mb="2%">
        <Box w="25%">
          <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Asset_2_288x-8_5.png?v=1661838672" />
          <Text mt="3%">
            Subscribe to email alerts. We promise not to spam your inbox.
          </Text>
          <Flex p="1%" gap="2%" mt="2%">
            <Input placeholder="Email Address*" />
            <Button colorScheme="red" p="6%">
              SUBSCRIBE
            </Button>
          </Flex>
        </Box>

        <Flex gap="10%" w="80%">
          <Box>
            <Heading size="sm">SHOP</Heading>
            <Text mt="18%">True Wireless Earbuds</Text>
            <Text>Wired Headphones</Text>
            <Text>Home Audio</Text>
            <Text>Smart Watches</Text>
            <Text>Misfit</Text>
            <Text>Earn ₹100</Text>
          </Box>

          <Box mt="4%">
            <Text>True Wireless Earbuds</Text>
            <Text>Wired Headphones</Text>
            <Text>Home Audio</Text>
            <Text>Smart Watches</Text>
            <Text>Misfit</Text>
            <Text>Earn ₹100</Text>
          </Box>

          <Box>
            <Heading size="sm">HELP</Heading>
            <Text mt="18%">True Wireless Earbuds</Text>
            <Text>Wired Headphones</Text>
            <Text>Home Audio</Text>
            <Text>Smart Watches</Text>
            <Text>Misfit</Text>
            <Text>Earn ₹100</Text>
          </Box>

          <Box mt="4%">
            <Text>True Wireless Earbuds</Text>
            <Text>Wired Headphones</Text>
            <Text>Home Audio</Text>
            <Text>Smart Watches</Text>
            <Text>Misfit</Text>
            <Text>Earn ₹100</Text>
          </Box>

          <Box>
            <Heading size="sm">COMPANY</Heading>
            <Text mt="18%">True Wireless Earbuds</Text>
            <Text>Wired Headphones</Text>
            <Text>Home Audio</Text>
            <Text>Smart Watches</Text>
            <Text>Misfit</Text>
            <Text>Earn ₹100</Text>
          </Box>
        </Flex>
      </Flex>

      <hr />
      <Flex mt="1%" mb="1%">
        <Image />
        <Image />
        <Image />
        <Image />
        <Image />
        <Text>Hello</Text>
      </Flex>
      <hr />

      <Box w="95%" m="auto" mt="2%">
        <Flex justifyContent="space-between">
          <Box w="30%">
            <Text fontWeight="bold">Dowload the App</Text>
            <Flex>
              <Flex>
                <Image
                  w="45%"
                  h="8vh"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/google-play-store_new.png?v=1666071594"
                />
                <Image
                  w="45%"
                  h="8vh"
                  src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/app-store_new_96c42e79-8764-4292-885a-dc793dde4655.png?v=1666071566"
                />
              </Flex>
            </Flex>
          </Box>

          <Box>
            <Text fontWeight="bold">We Accept</Text>
            <Flex>
              <Image
                h="10vh"
                src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/g_54cc0f26-12a4-4bd1-adca-676746073e7a_617x.png?v=1674109066"
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
      <hr />

      <Box w="95%" m="auto" mt="2%" mb="5%">
        <Text>© 2023 Imagine Marketing Limited. All Rights Reserved.</Text>
        <Flex w="55%" mt="2%">
          <Text fontSize="14px">
            For queries contact us: Manager, Imagine Marketing Limited Unit no.
            204 & 205, 2nd floor, D-wing & E-wing, Corporate Avenue, Andheri
            Ghatkopar Link Road, Mumbai, Maharashtra-400093, India
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
