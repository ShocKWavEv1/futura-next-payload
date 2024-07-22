import { Box } from "@chakra-ui/react";
import { CatalogInventoryProps } from "./model";
import { basePadding } from "@/app/(app)/lib/basePadding";
import CatalogItem from "./catalogItem/catalogItem";

const CatalogInventory: React.FC<CatalogInventoryProps> = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <Box w="100%" p={basePadding()} mt="30px">
      <Box w="100%" display="grid" gridTemplateColumns="1fr 1fr 1fr" gap="20px">
        {arr.map((item: any, index: number) => {
          return <CatalogItem key={item} />;
        })}
      </Box>
    </Box>
  );
};

export default CatalogInventory;
