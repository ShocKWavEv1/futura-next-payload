import { Box, Spinner } from "@chakra-ui/react";
import { CatalogInventoryProps } from "./model";
import { basePadding } from "@/app/(app)/lib/basePadding";
import CatalogItem from "./catalogItem/catalogItem";

const CatalogInventory: React.FC<CatalogInventoryProps> = ({
  catalog,
  isLoading,
}) => {
  return (
    <Box w="100%" position="relative" p={basePadding()} mt="30px">
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
      {isLoading && (
        <Box
          w="100%"
          position="absolute"
          top="0"
          bottom="0"
          right="0"
          left="0"
          bg="rgba(0,0,0,.5)"
          zIndex="1"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Spinner size="xl" color="primary.500" />
        </Box>
      )}
    </Box>
  );
};

export default CatalogInventory;
