"use client";
import { useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";
import { NavbarProps } from "./model";
import Image from "next/image";
import flama from "../../theme/designSystem/assets/flama-white.svg";
import ShoppingBag from "./shoppingBag/shoppingBag";
import { basePadding } from "../../lib/basePadding";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStoreShoppingCart } from "../../lib/zustand/shoppingCartStore";
import useSWR from "swr";
import { fetcher, swrOptions } from "../../lib/swr/swrConfig";
import Nid from "nid";
import { urlShoppingCart } from "../../lib/routes/routes";

const Navbar: React.FC<NavbarProps> = () => {
  const {
    userId,
    setUserId,
    shoppingBag,
    initCart,
    isLoadingCart,
    setLoadingCart,
    setHasCart,
  } = useStoreShoppingCart();

  const pathname = usePathname();

  const links = [{ name: "About", href: "/about" }];

  const url = userId ? `${urlShoppingCart}?user=${userId}` : null;
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
    setLoadingCart(isLoading);
    setHasCart(data?.hasCart);
  }, [isLoading]);

  return (
    <Box w="100%">
      <Box p={basePadding()}>
        <Box
          w="100%"
          display="grid"
          gridTemplateColumns="160px 1fr"
          borderBottom="1.4px solid white"
        >
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Link href="/" prefetch>
              <Image
                src={flama}
                alt="flama"
                width={100}
                height={100}
                style={{ width: "100%", objectFit: "cover", cursor: "pointer" }}
              />
            </Link>
          </Box>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            flexDirection="row"
            gap="20px"
          >
            {links.map((link: any, index: number) => {
              return (
                <Link href={link.href} key={link.name} prefetch>
                  <Box
                    key={link}
                    display="flex"
                    alignItems="center"
                    cursor="pointer"
                  >
                    <Text variant="MDREGULAR" color="white">
                      {link.name}
                    </Text>
                  </Box>
                </Link>
              );
            })}
            {pathname !== "/checkout" && (
              <ShoppingBag
                isLoading={isLoadingCart}
                shoppingBag={shoppingBag}
              />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
