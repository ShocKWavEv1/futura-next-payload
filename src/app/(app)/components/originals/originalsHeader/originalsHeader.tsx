import { Box, Heading } from "@chakra-ui/react";
import { OriginalsHeaderProps } from "./model";
import { TfiAngleDown } from "react-icons/tfi";

const OriginalsHeader: React.FC<OriginalsHeaderProps> = () => {
  return (
    <Box
      w="auto"
      display="flex"
      mt="20px"
      flexDirection="row"
      borderRadius="12px"
    >
      <Heading
        variant="H1BOLD"
        fontSize="max(60px, 3.166667vw)"
        color="white"
        textAlign="left"
        bg="primary.500"
        px="10px"
        borderRadius="12px"
        display="flex"
        gap="20px"
      >
        Rompiendo la cuarta pared
        <Box
          w="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TfiAngleDown />
        </Box>
      </Heading>
    </Box>
  );
};

export default OriginalsHeader;
