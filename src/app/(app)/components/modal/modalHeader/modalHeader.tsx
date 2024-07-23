import { Box, Text } from "@chakra-ui/react";
import { ModalHeaderProps } from "./model";
import { TfiClose } from "react-icons/tfi";

const ModalHeader: React.FC<ModalHeaderProps> = ({ handleClose }) => {
  return (
    <Box w="100%" py="20px">
      <Box w="1.88vw" onClick={handleClose} display="flex" alignItems="center">
        <Text variant="H1BOLD" color="white" fontSize="1.88vw">
          <TfiClose />
        </Text>
      </Box>
    </Box>
  );
};

export default ModalHeader;
