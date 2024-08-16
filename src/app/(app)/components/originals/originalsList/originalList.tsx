import { Box } from "@chakra-ui/react";
import { OriginalsListProps } from "./model";
import OriginalItem from "./originalItem/originalItem";

const OriginalsList: React.FC<OriginalsListProps> = ({ originals }) => {
  const data = originals;
  return (
    <Box w="100%" mt="30px">
      <Box w="100%" display="grid" gridTemplateColumns="1fr 1fr" gap="20px">
        {data?.originals?.map((item: any, index: number) => {
          return (
            <OriginalItem
              key={item}
              index={index}
              item={item}
              project={data.name}
            />
          );
        })}
      </Box>
    </Box>
  );
};

export default OriginalsList;
