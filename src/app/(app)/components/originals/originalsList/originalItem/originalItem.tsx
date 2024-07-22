import { Box, Text } from "@chakra-ui/react";
import { OriginalItemProps } from "./model";

const OriginalItem: React.FC<OriginalItemProps> = () => {
  return (
    <Box w="100%" bg="white" p="20px" borderRadius="12px">
      <Text variant="LGMEDIUM" color="black">
        Episodio 01 - Edurne Keel
      </Text>
      <Box pt="30px">
        <Text variant="XSMEDIUM" color="black">
          Rompiendo La Cuarta Pared
        </Text>
      </Box>
    </Box>
  );
};

export default OriginalItem;
