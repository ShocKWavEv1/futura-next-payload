import { Box, Heading } from "@chakra-ui/react";
import { ModalOriginalsProps } from "./model";

const ModalOriginals: React.FC<ModalOriginalsProps> = ({
  originals,
  handleClose,
}) => {
  return (
    <Box width="100%" display="grid" gridTemplateColumns="1fr" gap="20px">
      {originals.map((original: any, index: number) => {
        return (
          <Box
            key={original}
            w="100%"
            p="10px 10px"
            bg={index === 0 ? "primary.500" : "transparent"}
            _hover={{ bg: "primary.500", transition: "all .3s ease-in-out" }}
            onClick={handleClose}
            cursor="pointer"
          >
            <Heading variant="H6BOLD" color="white">
              {original.name}
            </Heading>
          </Box>
        );
      })}
    </Box>
  );
};

export default ModalOriginals;
