import { basePadding } from "@/app/(app)/lib/basePadding";
import { CatalogHeaderProps } from "./model";
import { Box, Heading } from "@chakra-ui/react";
import { TfiAngleDown } from "react-icons/tfi";

const CatalogHeader: React.FC<CatalogHeaderProps> = () => {
  return (
    <Box w="100%" p={basePadding()}>
      <Heading
        variant="H1BOLD"
        fontSize="max(90px, 5.166667vw)"
        color="white"
        textAlign="left"
      >
        Available for rent
      </Heading>
      <Box w="auto" display="flex" flexDirection="row" borderRadius="12px">
        <Heading
          variant="H1BOLD"
          fontSize="max(90px, 5.166667vw)"
          color="white"
          textAlign="left"
          bg="primary.500"
          px="10px"
          borderRadius="12px"
          display="flex"
          gap="20px"
        >
          All categories
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
    </Box>
  );
};

export default CatalogHeader;
