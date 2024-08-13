"use client";
import { Box, Heading } from "@chakra-ui/react";
import { OriginalsHeaderProps } from "./model";
import { TfiAngleDown } from "react-icons/tfi";
import { AnimatePresence } from "framer-motion";
import Modal from "../../modal/modal";
import {
  ModalKeys,
  useStoreZustand,
} from "@/app/(app)/lib/zustand/zustandStore";
import ModalOriginals from "../../modals/modalOriginals/modalOriginals";

const OriginalsHeader: React.FC<OriginalsHeaderProps> = ({ originals }) => {
  const { modals, setModalOpen } = useStoreZustand();
  const modalName: ModalKeys = "originalsCategories";
  return (
    <Box
      w="auto"
      display="flex"
      mt="20px"
      flexDirection="row"
      borderRadius="12px"
      onClick={() => setModalOpen(modalName)}
    >
      <Heading
        variant="H1BOLD"
        fontSize="max(60px, 3.166667vw)"
        color="white"
        textAlign="left"
        bg="primary.500"
        px="10px"
        borderRadius="12px"
        display="flex"
        gap="20px"
        cursor="pointer"
      >
        Rompiendo la cuarta pared
        <Box
          w="auto"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <TfiAngleDown />
        </Box>
      </Heading>
      <AnimatePresence mode="wait">
        {modals.originalsCategories && (
          <Modal handleClose={() => setModalOpen(modalName)}>
            <ModalOriginals
              originals={originals}
              handleClose={() => setModalOpen(modalName)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default OriginalsHeader;
