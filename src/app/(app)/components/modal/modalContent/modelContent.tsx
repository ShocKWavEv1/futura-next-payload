import { Box } from "@chakra-ui/react";
import { ModalContentProps } from "./model";

const ModalContent: React.FC<ModalContentProps> = ({ children }) => {
  return (
    <Box w="100%" pb="20px" overflowY="auto">
      <Box w="100%" h="auto" mt="10px">
        {children}
      </Box>
    </Box>
  );
};

export default ModalContent;
