import { Box, Button, Text } from "@chakra-ui/react";
import { MenuFooterProps } from "./model";
import {
  ModalKeys,
  useStoreZustand,
} from "@/app/(app)/lib/zustand/zustandStore";
import { useRouter } from "next/navigation";
import { useStoreShoppingCart } from "@/app/(app)/lib/zustand/shoppingCartStore";
import RemoveFromCart from "@/app/(app)/components/removeFromCart/removeFromCart";

const MenuFooter: React.FC<MenuFooterProps> = () => {
  const { shoppingBag } = useStoreShoppingCart();
  const { setModalOpen } = useStoreZustand();
  const router = useRouter();
  const modalName: ModalKeys = "shoppingBag";
  const bagEmpty = shoppingBag?.items.length !== 0;
  return (
    <Box
      w="100%"
      h="17svh"
      display="grid"
      gridTemplateColumns="1fr"
      borderTop={bagEmpty ? "1.4px solid white" : "none"}
      borderColor="white"
      bg="black"
    >
      <Box
        w="100%"
        h="100%"
        display="grid"
        gridTemplateColumns="1fr auto"
        pt="10px"
      >
        {bagEmpty && (
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
          >
            <Text variant="MDMEDIUM" color="white">
              Total: $32,789
            </Text>
          </Box>
        )}

        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          {bagEmpty && (
            <RemoveFromCart item={{}} type="all" text="Remover todo" />
          )}
        </Box>
      </Box>
      <Box
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        mt="-10px"
      >
        {bagEmpty && (
          <Button
            variant="white"
            size="sm"
            w="100%"
            onClick={() => {
              setModalOpen(modalName);
              router.push("/checkout");
            }}
          >
            🔥 Lo quiero todo 🔥
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default MenuFooter;
