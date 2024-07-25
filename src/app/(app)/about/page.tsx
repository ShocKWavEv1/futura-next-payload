import React from "react";
import { Box } from "@chakra-ui/react";
import HeroCheckout from "../components/heroCheckout/heroCheckout";

const AboutPage = async () => {
  return (
    <Box bg="black" w="100%" h="auto">
      <HeroCheckout />
    </Box>
  );
};

export default AboutPage;
