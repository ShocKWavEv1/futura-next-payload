import { Box } from "@chakra-ui/react";
import { MenuBodyProps } from "./model";
import MenuHeader from "./menuHeader/menuHeader";
import MenuContent from "./menuContent/menuContent";
import MenuFooter from "./menuFooter/menuFooter";

const MenuBody: React.FC<MenuBodyProps> = () => {
  return (
    <Box
      w="100%"
      h="100dvh"
      display="flex"
      flexDirection="column"
      onWheel={(event: any) => event.stopPropagation()}
    >
      <Box
        w="100%"
        h="calc(100dvh - 17dvh)"
        display="flex"
        flexDirection="column"
        position="relative"
      >
        <MenuHeader />
        <MenuContent />
      </Box>
      <MenuFooter />
    </Box>
  );
};

export default MenuBody;
