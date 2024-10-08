"use client";
import { basePadding } from "@/app/(app)/lib/basePadding";
import { CatalogHeaderProps } from "./model";
import { Box, Heading } from "@chakra-ui/react";
import { TfiAngleDown } from "react-icons/tfi";
import { AnimatePresence } from "framer-motion";
import {
  ModalKeys,
  useStoreZustand,
} from "@/app/(app)/lib/zustand/zustandStore";
import Modal from "../../modal/modal";
import ModalCategories from "../../modals/modalCategories/modalCategories";
import {
  headerSelectionLineHeightSizes,
  headerSelectionSizes,
} from "@/app/(app)/lib/baseResponsive/baseResponsive";

const CatalogHeader: React.FC<CatalogHeaderProps> = ({
  categories,
  currentCategory,
  setCurrentCategory,
}) => {
  const { modals, setModalOpen } = useStoreZustand();
  const modalName: ModalKeys = "categories";
  return (
    <Box w="100%" p={basePadding()}>
      <Heading
        variant="H1BOLD"
        fontSize={headerSelectionSizes}
        lineHeight={headerSelectionLineHeightSizes}
        color="white"
        textAlign="left"
      >
        Disponible para renta
      </Heading>
      <Box
        w="auto"
        display="flex"
        flexDirection="row"
        borderRadius="8px"
        cursor="pointer"
        onClick={() => setModalOpen(modalName)}
      >
        <Heading
          variant="H1BOLD"
          fontSize={headerSelectionSizes}
          lineHeight={headerSelectionLineHeightSizes}
          color="white"
          textAlign="left"
          bg="primary.500"
          px="10px"
          borderRadius="12px"
          display="flex"
          gap="20px"
        >
          {currentCategory?.description}
          <Box
            w="auto"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <TfiAngleDown />
          </Box>
        </Heading>
      </Box>
      <AnimatePresence mode="wait">
        {modals.categories && (
          <Modal handleClose={() => setModalOpen(modalName)}>
            <ModalCategories
              categories={categories}
              currentCategory={currentCategory}
              setCurrentCategory={(category: any) =>
                setCurrentCategory(category)
              }
              handleClose={() => setModalOpen(modalName)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default CatalogHeader;
