import { Box, Button, Text } from "@chakra-ui/react";
import { MenuFooterProps } from "./model";
import { useStoreZustand } from "@/app/(app)/lib/zustand/zustandStore";

const MenuFooter: React.FC<MenuFooterProps> = () => {
  const { count } = useStoreZustand();
  return (
    <Box
      w="100%"
      h="17svh"
      display="grid"
      gridTemplateColumns="1fr"
      borderTop="1.4px solid white"
      borderColor="white"
      bg="black"
    >
      <Box
        w="100%"
        h="100%"
        display="grid"
        gridTemplateColumns="1fr auto"
        pt="10px"
      >
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Text variant="MDMEDIUM" color="white">
            Total: {count > 0 && `$32,789`}
          </Text>
        </Box>
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          {count > 0 && (
            <Box
              w="auto"
              p="4px 12px"
              bg="rgba(255, 255, 255, .1)"
              borderRadius="25em"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text variant="XSMEDIUM" color="white" fontSize="0.9vw">
                Remover todo
              </Text>
            </Box>
          )}
        </Box>
      </Box>
      <Box
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="-10px"
      >
        <Button variant="white" size="sm" w="100%">
          🔥 Lo quiero todo 🔥
        </Button>
      </Box>
    </Box>
  );
};

export default MenuFooter;
