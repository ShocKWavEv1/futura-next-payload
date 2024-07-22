import { Box } from "@chakra-ui/react";
import CrewItem from "./originalItem/originalItem";
import { OriginalsListProps } from "./model";

const OriginalsList: React.FC<OriginalsListProps> = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <Box w="100%" mt="30px">
      <Box w="100%" display="grid" gridTemplateColumns="1fr 1fr" gap="20px">
        {arr.map((item: any, index: number) => {
          return <CrewItem key={item} />;
        })}
      </Box>
    </Box>
  );
};

export default OriginalsList;
