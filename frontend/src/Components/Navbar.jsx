import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [loginPage, setLoginPage] = useState(false);

  return (
    <Box textAlign="center" boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px">
      <Box bg="black" color="white" p="0.3%">
        New deals - every single day. Start saving NOW!
      </Box>

      <Box p="1.5%">
        <Flex justifyContent="space-between">
          <Box>
            <NavLink to="/">
              <Image src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boat_logo_small.webp?v=1672379935" />
            </NavLink>
          </Box>

          <Flex w="50%">
            <Select fontWeight="bold" w="25%" m="auto">
              <option value="">CATEGORIES</option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
            </Select>

            <Text fontWeight="bold" m="auto">
              DAILY DEALS
            </Text>
            <Text fontWeight="bold" m="auto">
              GIFT WITH BOAT
            </Text>

            <Select fontWeight="bold" w="15%" m="auto">
              <option value="">MORE</option>
              <option value="">Do What Floats Your boAt</option>
              <option value="">Blogs</option>
              <option value="">Corporate Orders</option>
              <option value="">Earn ₹100</option>
              <option value="">Careers</option>
              <option value="">Social Responsibility</option>
              <option value="">Meet the boAtheads</option>
            </Select>
          </Flex>

          <Box w="25%"x>
            <Flex>
              <Flex>
                <AiOutlineSearch style={{ width: "20%", margin: "auto" }} />
                <Input />
              </Flex>

              <FaRegUser style={{ margin: "auto", cursor:"pointer" }} onClick={()=> setLoginPage(true)}/>
              <AiOutlineShoppingCart style={{ margin: "auto" }} />
            </Flex>

            { loginPage === true ? <Box
              position="absolute"
              bg="white"
              boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              w="20%"
              m="auto"
              p="0.5%" mt="1%" ml="5%"
            >
              <Flex justifyContent="space-between" p="3%">
                <Text fontWeight="bold" color="red">
                  Hi boAthead!
                </Text>
                <Text fontWeight="bold" color="red" cursor="pointer" onClick={()=> setLoginPage(false)}>
                  X
                </Text>
              </Flex>
              <NavLink to="/login" onClick={()=> setLoginPage(false)}>
                <Button colorScheme="red" w="95%" m="auto">
                  Login
                </Button>
              </NavLink>
            </Box> : null}

          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
