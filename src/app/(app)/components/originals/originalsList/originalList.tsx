import { Box } from "@chakra-ui/react";
import { OriginalsListProps } from "./model";
import OriginalItem from "./originalItem/originalItem";

const OriginalsList: React.FC<OriginalsListProps> = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Box w="100%" mt="30px">
      <Box w="100%" display="grid" gridTemplateColumns="1fr 1fr" gap="20px">
        {arr.map((item: any, index: number) => {
          return <OriginalItem key={item} index={index} item={item} />;
        })}
      </Box>
    </Box>
  );
};

export default OriginalsList;
