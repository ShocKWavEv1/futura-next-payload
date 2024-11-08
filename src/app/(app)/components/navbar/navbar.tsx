"use client";
import { useEffect, useState } from "react";
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
import { useMotionValueEvent, useScroll, motion } from "framer-motion";

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

  const [hidden, setHidden] = useState<boolean>(false);

  const pathname = usePathname();

  const links = [{ name: "About", href: "/about" }];

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest: any) => {
    const previous: any = scrollY.getPrevious();
    if (latest > previous && latest > 20) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const url = userId ? `${urlShoppingCart}?user=${userId}` : null;
  const { data, isLoading } = useSWR(url, fetcher, swrOptions);

  useEffect(() => {
    if (localStorage.getItem("userId") === null) {
      localStorage.setItem("userId", Nid(12));
    }
    setUserId(localStorage.getItem("userId"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isLoading) {
      initCart(data?.cart);
    }
    setLoadingCart(isLoading);
    setHasCart(data?.hasCart);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <Box w="100%">
      <motion.div
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{
          duration: 0.35,
          ease: "easeInOut",
        }}
        style={{
          width: "100%",
          height: "auto",
          position: "fixed",
          backgroundColor: "black",
          zIndex: 4,
          transition: "background-color 0.35s ease-in-out",
        }}
      >
        <Box p={basePadding()}>
          <Box
            w="100%"
            display="grid"
            gridTemplateColumns={[
              "120px 1fr",
              "140px 1fr",
              "160px 1fr",
              "160px 1fr",
              "160px 1fr",
            ]}
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
                  style={{
                    width: "100%",
                    objectFit: "cover",
                    cursor: "pointer",
                  }}
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
                  isHidden={hidden}
                />
              )}
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Navbar;
