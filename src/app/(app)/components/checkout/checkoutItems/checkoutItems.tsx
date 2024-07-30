"use client";
import { Box, Heading } from "@chakra-ui/react";
import { CheckoutItemsProps } from "./model";
import MenuItem from "../../navbar/shoppingBag/slideMenu/menuBody/menuContent/menuItem/menuItem";
import { useStoreShoppingCart } from "@/app/(app)/lib/zustand/shoppingCartStore";

const CheckoutItems: React.FC<CheckoutItemsProps> = () => {
  const { shoppingBag } = useStoreShoppingCart();
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      flexDirection="column"
      overflowY="auto"
    >
      <Box
        w="100%"
        minH="100%"
        h="auto"
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        flexDirection="column"
        gap="30px"
      >
        {shoppingBag?.items?.length !== 0 ? (
          shoppingBag?.items?.map((item: any, index: number) => {
            return (
              <MenuItem item={item} showPill={false} isCheckout key={item} />
            );
          })
        ) : (
          <Box w="100%" h="100%" />
        )}
        {shoppingBag?.items?.length !== 0 && (
          <Box w="100%" display="grid" gridTemplateColumns="1fr 1fr">
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
            >
              <Heading variant="H8MEDIUM" color="white">
                Total
              </Heading>
            </Box>
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Heading variant="H8MEDIUM" color="white">
                $32,7899
              </Heading>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default CheckoutItems;
