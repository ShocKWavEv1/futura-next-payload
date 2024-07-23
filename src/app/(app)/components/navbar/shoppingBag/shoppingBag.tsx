import { Box, Text } from "@chakra-ui/react";
import { ShoppingBagProps } from "./model";
import { useStoreZustand } from "@/app/(app)/lib/zustand/zustandStore";
import { AnimatePresence } from "framer-motion";
import SlideMenu from "./slideMenu/sliedeMenu";

const ShoppingBag: React.FC<ShoppingBagProps> = () => {
  const { count, isShoppingBagOpen, setIsShoppingBagOpen } = useStoreZustand();

  return (
    <Box
      width="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      gap="10px"
      onClick={(e) => setIsShoppingBagOpen()}
    >
      <Text variant="MDREGULAR" color="white">
        Bag
      </Text>
      <Box
        w="26px"
        h="26px"
        p="0px 0px"
        border="1px solid white"
        borderRadius="25em"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text variant="XXSREGULAR" color="white">
          {count}
        </Text>
      </Box>
      <AnimatePresence mode="wait">
        {isShoppingBagOpen && <SlideMenu />}
      </AnimatePresence>
    </Box>
  );
};

export default ShoppingBag;
