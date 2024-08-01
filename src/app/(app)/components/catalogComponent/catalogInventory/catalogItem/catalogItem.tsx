"use client";
import { Box, Text } from "@chakra-ui/react";
import { CatalogItemProps } from "./model";
import Image from "next/image";
import buy_me from "../../../../theme/designSystem/assets/buy-me.svg";
import { formatPrice } from "@/app/(app)/utils/utils";
import { useStoreShoppingCart } from "@/app/(app)/lib/zustand/shoppingCartStore";
import { useToast } from "@chakra-ui/react";
import {
  ModalKeys,
  useStoreZustand,
} from "@/app/(app)/lib/zustand/zustandStore";
import { useEffect, useState } from "react";
import { urlShoppingCart } from "@/app/(app)/lib/routes/routes";

const CatalogItem: React.FC<CatalogItemProps> = ({ item }) => {
  const { addToCart, hasCart, userId, shoppingBag } = useStoreShoppingCart();
  const { setModalOpen } = useStoreZustand();
  const toast = useToast();

  const [itemToAdd, setItemToAdd] = useState<any>(null);

  const modalName: ModalKeys = "shoppingBag";

  useEffect(() => {
    if (itemToAdd) updateCartUser();
  }, [itemToAdd]);

  const handleAddtoCart = (item: any) => {
    addToCart(
      item,
      () => setModalOpen(modalName),
      () => handleToast()
    );
    setItemToAdd(item);
    !hasCart && createCartUser(item);
  };

  const handleToast = () => {
    toast({
      position: "bottom-right",
      duration: 1500,
      render: () => (
        <Box
          color="white"
          p="10px"
          bg="white"
          border="1.4px solid white"
          borderRadius="4px"
          shadow="2xl"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Text variant="XSMEDIUM" color="black">
            {item.name} ya esta en tu bolsa
          </Text>
        </Box>
      ),
    });
  };

  const createCartUser = async (item: any) => {
    const response = await fetch(urlShoppingCart, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, item }),
    });

    if (!response.ok) {
      throw new Error("Failed to create shopping cart");
    }
  };

  const updateCartUser = async () => {
    const response = await fetch(urlShoppingCart, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, shoppingBag }),
    });

    if (!response.ok) {
      throw new Error("Failed to create shopping cart");
    }
  };

  return (
    <Box
      w="100%"
      display="grid"
      gridTemplateColumns="1fr"
      bg="white"
      borderRadius="12px"
      position="relative"
      className="catalog_item_container"
      onClick={() => handleAddtoCart(item)}
    >
      <Box
        w="100%"
        h="380px"
        borderTopLeftRadius="12px"
        borderTopRightRadius="12px"
      >
        <Box w="100%" h="100%">
          <Image
            src={item?.mainImage?.url}
            alt={item.name}
            width={200}
            height={380}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px",
            }}
          />
        </Box>
        <Box className="buyme_overlay" cursor="pointer">
          <Box
            mt="-15%"
            w="60%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mixBlendMode="difference"
            userSelect="none"
            pointerEvents="none"
          >
            <Image
              src={buy_me}
              alt="buy_me"
              width={100}
              height={100}
              style={{ width: "100%", objectFit: "cover" }}
              className="rotating"
            />
          </Box>
        </Box>
      </Box>
      <Box
        w="100%"
        p="15px 12px"
        borderTop="1.4px solid white"
        borderColor="black"
        display="grid"
        gridTemplateColumns="1fr auto"
      >
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Text variant="MDMEDIUM" color="#000">
            {item.name}
          </Text>
        </Box>
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Text variant="XSMEDIUM" color="#000">
            {formatPrice(item.price)}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CatalogItem;
