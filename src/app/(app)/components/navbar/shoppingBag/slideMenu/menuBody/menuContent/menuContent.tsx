import { Box } from "@chakra-ui/react";
import { MenuContentProps } from "./model";
import MenuItem from "./menuItem/menuItem";
import { useStoreZustand } from "@/app/(app)/lib/zustand/zustandStore";

const MenuContent: React.FC<MenuContentProps> = () => {
  const { count } = useStoreZustand();
  const items: any = [1, 2, 3, 4];
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
        gap="30px"
        p="20px 0px"
      >
        {count > 0 && items.length !== 0 ? (
          items.map((item: any, index: number) => {
            return <MenuItem key={item} />;
          })
        ) : (
          <Box w="100%" h="100%" />
        )}
      </Box>
    </Box>
  );
};

export default MenuContent;
