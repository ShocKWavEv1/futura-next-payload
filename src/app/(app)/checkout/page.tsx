import React from "react";
import { Box } from "@chakra-ui/react";
import HeroCheckout from "../components/heroCheckout/heroCheckout";
import Footer from "../components/footer/footer";
import CheckoutLayout from "../components/checkout/checkoutLayout";

const CheckoutPage = async () => {
  return (
    <Box bg="black" w="100%" h="auto">
      <HeroCheckout />
      <CheckoutLayout />
      <Footer />
    </Box>
  );
};

export default CheckoutPage;
