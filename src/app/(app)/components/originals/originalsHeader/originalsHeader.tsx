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
import {
  headerOriginalsSelectionLineHeightSizes,
  headerOriginalsSeletionSizes,
} from "@/app/(app)/lib/baseResponsive/baseResponsive";

const OriginalsHeader: React.FC<OriginalsHeaderProps> = ({
  originals,
  originalsCategories,
  setCurrentOriginal,
}) => {
  const { modals, setModalOpen } = useStoreZustand();
  const modalName: ModalKeys = "originalsCategories";
  return (
    <Box
      w="auto"
      display="flex"
      mt="20px"
      flexDirection="row"
      onClick={() => setModalOpen(modalName)}
    >
      <Heading
        variant={["H7BOLD", "H5BOLD", "H4BOLD", "H4BOLD", "H4BOLD", "H4BOLD"]}
        w={["100%", "100%", "auto", "auto", "auto", "auto"]}
        fontSize={headerOriginalsSeletionSizes}
        lineHeight={headerOriginalsSelectionLineHeightSizes}
        color="white"
        textAlign="left"
        bg="primary.500"
        px="10px"
        borderRadius="8px"
        display="flex"
        gap="40px"
        cursor="pointer"
        position="relative"
      >
        {originals?.name}
        <Box
          w="auto"
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          position={[
            "absolute",
            "absolute",
            "relative",
            "relative",
            "relative",
          ]}
          right={["10px", "10px", "0px", "0px", "0px", "0px"]}
          top="0%"
        >
          <TfiAngleDown />
        </Box>
      </Heading>
      <AnimatePresence mode="wait">
        {modals.originalsCategories && (
          <Modal handleClose={() => setModalOpen(modalName)}>
            <ModalOriginals
              currentOriginal={originals}
              originalsCategories={originalsCategories}
              setCurrentOriginal={(original: any) =>
                setCurrentOriginal(original)
              }
              handleClose={() => setModalOpen(modalName)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default OriginalsHeader;
