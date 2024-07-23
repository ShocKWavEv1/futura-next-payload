"use client";
import { Box, Text } from "@chakra-ui/react";
import { OriginalItemProps } from "./model";
import { AnimatePresence } from "framer-motion";
import Modal from "../../../modal/modal";
import {
  ModalKeys,
  useStoreZustand,
} from "@/app/(app)/lib/zustand/zustandStore";

const OriginalItem: React.FC<OriginalItemProps> = ({ index, item }) => {
  const { modals, setModalOpen } = useStoreZustand();
  const modalName: ModalKeys = `originalsVideo_${index}`;
  return (
    <Box
      w="100%"
      bg="white"
      p="20px"
      borderRadius="12px"
      onClick={() => setModalOpen(modalName)}
    >
      <Text variant="LGMEDIUM" color="#000">
        Episodio 0{index + 1} - Edurne Keel
      </Text>
      <Box pt="30px">
        <Text variant="XSMEDIUM" color="#000">
          Rompiendo La Cuarta Pared
        </Text>
      </Box>
      <AnimatePresence mode="wait">
        {modals[modalName] && (
          <Modal handleClose={() => setModalOpen(modalName)}>
            Hi originalsVideo {index + 1}
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default OriginalItem;
