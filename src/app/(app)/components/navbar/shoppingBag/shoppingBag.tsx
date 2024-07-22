import { Box, Text } from "@chakra-ui/react";
import { ShoppingBagProps } from "./model";

const ShoppingBag: React.FC<ShoppingBagProps> = () => {
  return (
    <Box
      width="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      gap="10px"
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
          0
        </Text>
      </Box>
    </Box>
  );
};

export default ShoppingBag;
