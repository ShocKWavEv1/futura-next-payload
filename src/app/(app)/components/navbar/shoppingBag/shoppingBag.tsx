import { Box, SkeletonCircle, Text } from "@chakra-ui/react";
import { ShoppingBagProps } from "./model";
import {
  ModalKeys,
  useStoreZustand,
} from "@/app/(app)/lib/zustand/zustandStore";
import { AnimatePresence } from "framer-motion";
import SlideMenu from "./slideMenu/sliedeMenu";

const ShoppingBag: React.FC<ShoppingBagProps> = ({
  isLoading,
  shoppingBag,
  isHidden,
}) => {
  const { modals, setModalOpen } = useStoreZustand();
  const modalName: ModalKeys = "shoppingBag";
  return (
    <Box
      width="auto"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      gap="10px"
      onClick={(e) => setModalOpen(modalName)}
    >
      <Box
        w="auto"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="row"
        gap="10px"
        cursor="pointer"
      >
        <Text
          variant={[
            "SMREGULAR",
            "MDREGULAR",
            "MDREGULAR",
            "MDREGULAR",
            "MDREGULAR",
          ]}
          color="white"
        >
          Bag
        </Text>
        <Box
          w={["24px", "26px", "26px", "26px", "26px"]}
          h={["24px", "26px", "26px", "26px", "26px"]}
          p="0px 0px"
          border="1px solid white"
          borderRadius="25em"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {!shoppingBag && isLoading ? (
            <SkeletonCircle w="50%" h="50%" />
          ) : (
            <Text
              variant="XSMEDIUM"
              fontSize={["12px", "13px", "13px", "13px", "13px"]}
              color="white"
            >
              {shoppingBag?.items?.length}
            </Text>
          )}
        </Box>
      </Box>

      <AnimatePresence mode="wait">
        {modals.shoppingBag && (
          <SlideMenu
            handleClose={() => setModalOpen(modalName)}
            isHidden={isHidden}
          />
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ShoppingBag;
