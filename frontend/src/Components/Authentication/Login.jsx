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
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Box>
      <Box w="50%" m="auto" mt="3%">
        <Image
          m="auto"
          src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Group_993_medium.png?v=1667977862"
        />
      </Box>

      <Box w="30%" m="auto" mt="5%" mb="10%">
        <Heading>LOGIN</Heading>
        <Flex gap="0.5%">
          <Text>New to boAt?</Text>
          <NavLink to="/register">
            <Text color="red">Create an account?</Text>
          </NavLink>
        </Flex>
        <Input m="7% 0% 5% 0%" placeholder="Email*" />
        <Input m="3% 0% 5% 0%" placeholder="Password*" />
        <Button colorScheme="red" w="100%">
          LOGIN
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
