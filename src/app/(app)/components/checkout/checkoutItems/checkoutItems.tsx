"use client";
import { Box, Heading } from "@chakra-ui/react";
import { CheckoutItemsProps } from "./model";
import MenuItem from "../../navbar/shoppingBag/slideMenu/menuBody/menuContent/menuItem/menuItem";
import { useStoreZustand } from "@/app/(app)/lib/zustand/zustandStore";

const CheckoutItems: React.FC<CheckoutItemsProps> = () => {
  const { count } = useStoreZustand();
  const items: any = [1, 2, 3, 4];

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
        {count > 0 && items.length !== 0 ? (
          items.map((item: any, index: number) => {
            return <MenuItem showPill={false} isCheckout key={item} />;
          })
        ) : (
          <Box w="100%" h="100%" />
        )}
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
      </Box>
    </Box>
  );
};

export default CheckoutItems;
