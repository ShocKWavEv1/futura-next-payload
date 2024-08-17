"use client";
import { Accordion, Box, Skeleton, Stack } from "@chakra-ui/react";
import { CheckoutLayoutProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import CheckoutItems from "./checkoutItems/checkoutItems";
import CheckoutForm from "./checkoutForm/checkoutForm";
import { useStoreShoppingCart } from "../../lib/zustand/shoppingCartStore";
import { mainSectionSpacers } from "../../lib/baseResponsive/baseResponsive";
import AccordionCheckout from "../accordionCheckout/accordionCheckout";

const CheckoutLayout: React.FC<CheckoutLayoutProps> = () => {
  const { shoppingBag, isLoadingCart } = useStoreShoppingCart();
  return (
    <Box
      w="100%"
      p={basePadding()}
      mt={mainSectionSpacers}
      pb={["0px", "0px", "60px", "60px", "60px", "60px"]}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        width={["100%", "100%", "100%", "95%", "85%", "85%"]}
        display="grid"
        gap="30px"
        gridTemplateColumns={[
          "1fr",
          "1fr",
          "1fr 1fr",
          "1fr 1fr",
          "1fr 1fr",
          "1fr 1fr",
        ]}
      >
        <Box
          w="100%"
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
        >
          <Skeleton
            w="100%"
            height={isLoadingCart ? "20px" : "auto"}
            display={["block", "block", "none", "none", "none", "none"]}
            isLoaded={!isLoadingCart}
            pb="30px"
          >
            {shoppingBag?.items?.length === 0 ||
            (!shoppingBag && !isLoadingCart) ? null : (
              <Box
                w="100%"
                display={["block", "block", "none", "none", "none", "none"]}
              >
                <AccordionCheckout />
              </Box>
            )}
          </Skeleton>
          <Stack spacing={isLoadingCart ? "20px" : "0px"}>
            <Skeleton
              height={isLoadingCart ? "120px" : "auto"}
              isLoaded={!isLoadingCart}
            >
              {shoppingBag?.items?.length === 0 ||
              (!shoppingBag && !isLoadingCart) ? (
                <Box w="100%" h="40svh" />
              ) : (
                <CheckoutForm />
              )}
            </Skeleton>
            <Skeleton
              height={isLoadingCart ? "80px" : "auto"}
              isLoaded={!isLoadingCart}
            />
            <Skeleton
              height={isLoadingCart ? "80px" : "auto"}
              isLoaded={!isLoadingCart}
            />
            <Skeleton
              height={isLoadingCart ? "80px" : "auto"}
              isLoaded={!isLoadingCart}
            />
          </Stack>
        </Box>
        <Box
          w="100%"
          display={["none", "none", "flex", "flex", "flex", "flex"]}
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Skeleton
            isLoaded={!isLoadingCart}
            w="100%"
            h={isLoadingCart ? "200px" : "auto"}
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
          >
            <CheckoutItems />
          </Skeleton>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutLayout;
