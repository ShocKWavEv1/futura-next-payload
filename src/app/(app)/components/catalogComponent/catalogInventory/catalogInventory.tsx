import { Box } from "@chakra-ui/react";
import { CatalogInventoryProps } from "./model";
import { basePadding } from "@/app/(app)/lib/basePadding";
import CatalogItem from "./catalogItem/catalogItem";

const CatalogInventory: React.FC<CatalogInventoryProps> = ({ catalog }) => {
  return (
    <Box w="100%" p={basePadding()} mt="30px">
      <Box
        w="100%"
        display="grid"
        gridTemplateColumns={[
          "1fr",
          "1fr",
          "1fr 1fr",
          "1fr 1fr 1fr",
          "repeat(3, 1fr)",
        ]}
        gap="20px"
      >
        {catalog?.map((item: any, index: number) => {
          return <CatalogItem key={item} item={item} />;
        })}
      </Box>
    </Box>
  );
};

export default CatalogInventory;
