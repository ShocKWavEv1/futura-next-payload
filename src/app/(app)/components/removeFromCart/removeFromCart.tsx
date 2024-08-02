"use client";
import { Box, Text } from "@chakra-ui/react";
import { RemoveFromCartProps } from "./model";
import { useStoreShoppingCart } from "../../lib/zustand/shoppingCartStore";
import { urlShoppingCart } from "../../lib/routes/routes";

const RemoveFromCart: React.FC<RemoveFromCartProps> = ({
  item,
  type,
  text,
}) => {
  const { removeFromCart, removeAll, userId, shoppingBag } =
    useStoreShoppingCart();

  const updateCartUser = async (item: any) => {
    let updatedItems: any = [];
    if (type === "single") {
      updatedItems = shoppingBag.items.filter(
        (cartItem: any) => cartItem.catalogItem.id !== item.catalogItem.id
      );
    }
    const response = await fetch(urlShoppingCart, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, shoppingBag: { items: updatedItems } }),
    });

    if (!response.ok) {
      throw new Error("Failed to create shopping cart");
    }
  };

  return (
    <Box
      w="auto"
      p="4px 15px"
      bg="rgba(255, 255, 255, .1)"
      borderRadius="25em"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      color="white"
      shadow="2xl"
      onClick={() => {
        type === "single" ? removeFromCart(item) : removeAll();
        updateCartUser(item);
      }}
      _hover={{
        bg: "white",
        color: "black",
        transition: "all .3s ease-in-out",
      }}
    >
      <Text
        variant="XSMEDIUM"
        fontSize={["13px", "12px", "12px", "12px", "12px"]}
      >
        {text}
      </Text>
    </Box>
  );
};

export default RemoveFromCart;
