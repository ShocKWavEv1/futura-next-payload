import { Box } from "@chakra-ui/react";
import { ModalContentProps } from "./model";

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
    <Box w="100%" pb="20px" overflowY="auto" borderTop="1.4px solid white">
      <Box w="100%" h="auto" mt="20px">
        {children}
      </Box>
    </Box>
  );
};

export default ModalContent;
