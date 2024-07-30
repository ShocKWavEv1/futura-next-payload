import { Box } from "@chakra-ui/react";
import { MenuContentProps } from "./model";
import MenuItem from "./menuItem/menuItem";
import { useStoreShoppingCart } from "@/app/(app)/lib/zustand/shoppingCartStore";

const MenuContent: React.FC<MenuContentProps> = () => {
  const { shoppingBag } = useStoreShoppingCart();
  return (
    <Box w="100%" h="100%" overflowY="auto">
      <Box
        w="100%"
        minH="100%"
        h="auto"
        display="flex"
        alignItems="flex-start"
        justifyContent="flex-start"
        flexDirection="column"
        gap="40px"
        p="20px 0px 40px 0px"
      >
        {shoppingBag?.items.length !== 0 ? (
          shoppingBag?.items.map((item: any, index: number) => {
            return <MenuItem key={item} item={item} />;
          })
        ) : (
          <Box w="100%" h="100%" />
        )}
      </Box>
    </Box>
  );
};

export default MenuContent;
