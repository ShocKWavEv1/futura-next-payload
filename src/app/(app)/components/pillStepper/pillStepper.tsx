"use client";
import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { PillStepperProps } from "./model";
import { TfiMinus, TfiPlus } from "react-icons/tfi";
import { useStoreShoppingCart } from "../../lib/zustand/shoppingCartStore";
import { urlShoppingCart } from "../../lib/routes/routes";
import { useDebounce } from "../../hooks/useDebounce";

const PillStepper: React.FC<PillStepperProps> = ({ item, index }) => {
  const { userId, shoppingBag, updateCart } = useStoreShoppingCart();
  const [currentShoppingBag, setCurrentShoppingBag] = useState(shoppingBag);
  const debouncedShoppingBag = useDebounce(currentShoppingBag, 500);

  useEffect(() => {
    if (JSON.stringify(debouncedShoppingBag) !== JSON.stringify(shoppingBag)) {
      updateCartUser();
    }
  }, [debouncedShoppingBag, shoppingBag]);

  const updateCartUser = async () => {
    try {
      const response = await fetch(urlShoppingCart, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, shoppingBag: shoppingBag }),
      });

      if (!response.ok) {
        throw new Error("Failed to update shopping cart");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecrement = () => {
    if (currentShoppingBag?.items[index]?.quantity > 1) {
      const updatedBag = {
        ...currentShoppingBag,
        items: currentShoppingBag.items.map((item: any, i: number) =>
          i === index ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };
      setCurrentShoppingBag(updatedBag);
      updateCart(index, updatedBag.items[index]);
    }
  };

  const handleIncrement = () => {
    if (
      currentShoppingBag?.items[index]?.quantity <
      currentShoppingBag?.items[index]?.catalogItem?.maxQuantity
    ) {
      const updatedBag = {
        ...currentShoppingBag,
        items: currentShoppingBag.items.map((item: any, i: number) =>
          i === index ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
      setCurrentShoppingBag(updatedBag);
      updateCart(index, updatedBag.items[index]);
    }
  };

  return (
    <Box
      w="auto"
      p="0px 0px"
      bg="rgba(255, 255, 255, .1)"
      display="grid"
      gridTemplateColumns="35px 1fr 35px"
      py="2px"
      borderRadius="4px"
    >
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px="10px"
        borderRight="1px solid"
        borderColor="rgba(255, 255, 255, .3)"
        color="white"
        cursor="pointer"
        borderLeftRadius="4px"
        _hover={{
          bg: "white",
          color: "black",
          transition: "all .3s ease-in-out",
        }}
        onClick={handleDecrement}
      >
        <Text variant="XSMEDIUM" fontSize="15px">
          <TfiMinus />
        </Text>
      </Box>
      <Box
        w="40px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px="10px"
      >
        <Text variant="XSMEDIUM" color="white" fontSize="15px">
          {currentShoppingBag?.items[index]?.quantity}
        </Text>
      </Box>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        px="10px"
        borderLeft="1px solid"
        borderColor="rgba(255, 255, 255, .3)"
        color="white"
        cursor="pointer"
        borderRightRadius="4px"
        _hover={{
          bg: "white",
          color: "black",
          transition: "all .3s ease-in-out",
        }}
        onClick={handleIncrement}
      >
        <Text variant="XSMEDIUM" fontSize="15px">
          <TfiPlus />
        </Text>
      </Box>
    </Box>
  );
};

export default PillStepper;
