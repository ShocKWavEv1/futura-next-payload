import { Box } from "@chakra-ui/react";
import { ModalProps } from "./model";
import Backdrop from "../backdrop/backdrop";
import { basePadding } from "../../lib/basePadding";
import ModalHeader from "./modalHeader/modalHeader";
import ModalContent from "./modalContent/modelContent";

const Modal: React.FC<ModalProps> = ({ children, handleClose }) => {
  return (
    <Backdrop handleClose={handleClose}>
      <Box
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          onClick={(e) => e.stopPropagation()}
          w="50vw"
          maxHeight="70svh"
          shadow="2xl"
          borderRadius="4px"
          bg="black"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
          flexDirection="column"
          p={basePadding()}
          onWheel={(event: any) => event.stopPropagation()}
        >
          <ModalHeader handleClose={handleClose} />
          <ModalContent>{children}</ModalContent>
        </Box>
      </Box>
    </Backdrop>
  );
};

export default Modal;
