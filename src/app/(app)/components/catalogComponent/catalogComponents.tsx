import { Box } from "@chakra-ui/react";
import { CatalogComponentProps } from "./model";
import CatalogHeader from "./catalogHeader/catalogHeader";
import CatalogInventory from "./catalogInventory/catalogInventory";

const CatalogComponent: React.FC<CatalogComponentProps> = () => {
  return (
    <Box w="100%" display="flex" flexDirection="column" mt="100px">
      <CatalogHeader />
      <CatalogInventory />
    </Box>
  );
};

export default CatalogComponent;
