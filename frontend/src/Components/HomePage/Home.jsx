import React from "react";
import Offer from "./Offer";
import Catergory from "./Catergory";
import DailyDeals from "./DailyDeals";
import BestOfBoat from "./BestOfBoat";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <div>
      <Offer />
      <Carousel/>
      <DailyDeals title={"Daily Deals"} />
      <Catergory />
      <BestOfBoat title={"Best Of BoAt"} />
      <BestOfBoat title={"Smartwatches"} />
      <BestOfBoat title={"Catch'em All"} />
    </div>
  );
};

export default Home;
