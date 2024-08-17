"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { AccordionCheckoutProps } from "./model";
import { useStoreShoppingCart } from "../../lib/zustand/shoppingCartStore";
import MenuItem from "../navbar/shoppingBag/slideMenu/menuBody/menuContent/menuItem/menuItem";

const AccordionCheckout: React.FC<AccordionCheckoutProps> = () => {
  const { shoppingBag } = useStoreShoppingCart();
  return (
    <Box w="100%">
      <Accordion allowToggle w="100%">
        <AccordionItem w="100%" border="none">
          <Box w="100%">
            <AccordionButton
              p="5px"
              w="100%"
              bg="primary.500"
              borderRadius="4px"
              _hover={{ bg: "primary.600" }}
            >
              <Box as="span" flex="1" textAlign="left">
                <Text variant="MDBOLD" color="white">
                  Mostrar Resumen
                </Text>
              </Box>
              <AccordionIcon color="white" fontSize="28px" />
            </AccordionButton>
          </Box>
          <AccordionPanel px="0px" pb="20px" pt="20px">
            <Box w="100%" display="flex" flexDirection="column" gap="20px">
              {shoppingBag?.items?.length !== 0 ? (
                shoppingBag?.items?.map((item: any, index: number) => {
                  return (
                    <MenuItem
                      item={item}
                      showPill={false}
                      isCheckout
                      key={item}
                    />
                  );
                })
              ) : (
                <Box w="100%" h="100%" />
              )}
            </Box>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default AccordionCheckout;
