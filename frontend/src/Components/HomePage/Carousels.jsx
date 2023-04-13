import { Box } from "@chakra-ui/react";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousels = () => {
  return (
    <Box w="95%" m="auto" mt="1%">
      <Carousel infiniteLoop>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/wvae-flex_1400x.jpg?v=1681216548" />
        </div>
        <div>
          <img src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/131_offer_desktop_1400x.jpg?v=1681301106" />
        </div>
      </Carousel>
    </Box>
  );
};

export default Carousels;
