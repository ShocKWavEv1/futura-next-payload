import { Box, Text } from "@chakra-ui/react";
import { ModalHeaderProps } from "./model";
import { TfiClose } from "react-icons/tfi";

const ModalHeader: React.FC<ModalHeaderProps> = ({ handleClose }) => {
  return (
    <Box w="100%" py="20px">
      <Box
        w="30px"
        onClick={handleClose}
        display="flex"
        alignItems="center"
        cursor="pointer"
      >
        <Text variant="H1BOLD" color="white" fontSize="30px">
          <TfiClose />
        </Text>
      </Box>
    </Box>
  );
};

export default ModalHeader;
