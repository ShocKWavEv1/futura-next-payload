"use client";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import { OriginalItemProps } from "./model";
import { AnimatePresence } from "framer-motion";
import Modal from "../../../modal/modal";
import {
  ModalKeys,
  useStoreZustand,
} from "@/app/(app)/lib/zustand/zustandStore";
import ModalOriginalVideo from "../../../modals/modalOriginalVideo/modalOriginalVideo";

const OriginalItem: React.FC<OriginalItemProps> = ({
  index,
  item,
  project,
}) => {
  const { modals, setModalOpen } = useStoreZustand();
  const [isVideoUrl, setIsVideoUrl] = useState("");
  const modalName: ModalKeys = `originalsVideo_${index}`;
  return (
    <Box
      w="100%"
      bg="white"
      p="20px"
      borderRadius="12px"
      onClick={() => {
        setIsVideoUrl(item.urlVideo);
        setModalOpen(modalName);
      }}
    >
      <Box cursor="pointer">
        <Text variant="LGMEDIUM" color="#000">
          {item?.name}
        </Text>
        <Box pt="30px">
          <Text variant="XSMEDIUM" color="#000">
            {project}
          </Text>
        </Box>
      </Box>

      <AnimatePresence mode="wait">
        {modals[modalName] && (
          <Modal handleClose={() => setModalOpen(modalName)}>
            <ModalOriginalVideo
              originalVideo={isVideoUrl}
              handleClose={() => setModalOpen(modalName)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default OriginalItem;
