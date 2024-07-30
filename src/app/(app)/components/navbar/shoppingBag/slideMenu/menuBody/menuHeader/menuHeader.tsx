import { Box, Text } from "@chakra-ui/react";
import { MenuHeaderProps } from "./model";
import { TfiClose } from "react-icons/tfi";
import { useStoreZustand } from "@/app/(app)/lib/zustand/zustandStore";

const MenuHeader: React.FC<MenuHeaderProps> = () => {
  const { setModalOpen } = useStoreZustand();

  return (
    <Box
      w="100%"
      p="30px 0px 20px 0px"
      display="flex"
      justifyContent="flex-start"
    >
      <Text
        onClick={(e) => {
          e.stopPropagation();
          setModalOpen("shoppingBag");
        }}
        variant="LGMEDIUM"
        color="white"
        fontSize="1.8vw"
        cursor="pointer"
      >
        <TfiClose />
      </Text>
    </Box>
  );
};

export default MenuHeader;
