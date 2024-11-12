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
import Image from "next/image";

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
      bg="black"
      p="20px"
      display="grid"
      gridTemplateColumns="1fr"
      gap="16px"
      borderRadius="8px"
      cursor="pointer"
      onClick={() => {
        setIsVideoUrl(item.urlVideo);
        setModalOpen(modalName);
      }}
    >
      <Box w="100%" h={["240px", "240px", "240px", "320px", "380px", "380px"]}>
        <Image
          src={item?.mainImageUrl}
          alt={item?.name}
          placeholder="blur"
          blurDataURL={item?.base64 && item.base64}
          unoptimized
          width={300}
          height={380}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            borderBottomRightRadius: "8px",
            borderBottomLeftRadius: "8px",
          }}
        />
      </Box>
      <Box>
        <Text variant="LGMEDIUM" color="white">
          {item?.name}
        </Text>
        <Box pt="16px">
          <Text variant="SMMEDIUM" color="white">
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
