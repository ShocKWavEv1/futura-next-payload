import { Box, Text } from "@chakra-ui/react";
import { RemoveFromCartProps } from "./model";
import { useStoreShoppingCart } from "../../lib/zustand/shoppingCartStore";

const RemoveFromCart: React.FC<RemoveFromCartProps> = ({
  item,
  type,
  text,
}) => {
  const { removeFromCart, removeAll } = useStoreShoppingCart();
  return (
    <Box
      w="auto"
      p="2px 10px"
      bg="rgba(255, 255, 255, .1)"
      borderRadius="25em"
      display="flex"
      alignItems="center"
      justifyContent="center"
      cursor="pointer"
      color="white"
      shadow="2xl"
      onClick={() => (type === "single" ? removeFromCart(item) : removeAll())}
      _hover={{
        bg: "white",
        color: "black",
        transition: "all .3s ease-in-out",
      }}
    >
      <Text variant="XSMEDIUM" fontSize="0.9vw">
        {text}
      </Text>
    </Box>
  );
};

export default RemoveFromCart;
