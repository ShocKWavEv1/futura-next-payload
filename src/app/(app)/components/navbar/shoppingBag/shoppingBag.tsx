"use client";
import { useEffect } from "react";
import { Box, SkeletonCircle, Text } from "@chakra-ui/react";
import { ShoppingBagProps } from "./model";
import {
  ModalKeys,
  useStoreZustand,
} from "@/app/(app)/lib/zustand/zustandStore";
import { AnimatePresence } from "framer-motion";
import SlideMenu from "./slideMenu/sliedeMenu";
import useSWR from "swr";
import { fetcher, swrOptions } from "@/app/(app)/lib/swr/swrConfig";
import { useStoreShoppingCart } from "@/app/(app)/lib/zustand/shoppingCartStore";
import Nid from "nid";

const ShoppingBag: React.FC<ShoppingBagProps> = () => {
  const { userId, setUserId, shoppingBag, initCart } = useStoreShoppingCart();
  const { modals, setModalOpen } = useStoreZustand();
  const modalName: ModalKeys = "shoppingBag";

  const url = userId ? `/api/shoppingCart?user=${userId}` : null;
  const { data, isLoading } = useSWR(url, fetcher, swrOptions);

  useEffect(() => {
    if (localStorage.getItem("userId") === null) {
      localStorage.setItem("userId", Nid(12));
    }
    setUserId(localStorage.getItem("userId"));
  }, []);

  useEffect(() => {
    if (!isLoading) {
      initCart(data?.cart);
    }
  }, [isLoading]);

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
        <Text variant="MDREGULAR" color="white">
          Bag
        </Text>
        <Box
          w="26px"
          h="26px"
          p="0px 0px"
          border="1px solid white"
          borderRadius="25em"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {!data ? (
            <SkeletonCircle w="50%" h="50%" />
          ) : (
            <Text variant="XSMEDIUM" fontSize="13px" color="white">
              {shoppingBag?.items?.length}
            </Text>
          )}
        </Box>
      </Box>

      <AnimatePresence mode="wait">
        {modals.shoppingBag && (
          <SlideMenu handleClose={() => setModalOpen(modalName)} />
        )}
      </AnimatePresence>
    </Box>
  );
};

export default ShoppingBag;
