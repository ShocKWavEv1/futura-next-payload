import { Box, Text } from "@chakra-ui/react";
import { MenuHeaderProps } from "./model";
import { TfiClose } from "react-icons/tfi";
import { useStoreZustand } from "@/app/(app)/lib/zustand/zustandStore";

const MenuHeader: React.FC<MenuHeaderProps> = () => {
  const { setIsShoppingBagOpen } = useStoreZustand();

  return (
    <Box w="100%" p="20px 0px" display="flex" justifyContent="flex-start">
      <Text
        onClick={(e) => {
          e.stopPropagation();
          setIsShoppingBagOpen();
        }}
        variant="LGMEDIUM"
        color="white"
        fontSize="1.8vw"
      >
        <TfiClose />
      </Text>
    </Box>
  );
};

export default MenuHeader;
