import { Box, Text } from "@chakra-ui/react";
import { NavbarProps } from "./model";
import Image from "next/image";
import flama from "../../theme/designSystem/assets/flama-white.svg";
import ShoppingBag from "./shoppingBag/shoppingBag";
import { basePadding } from "../../lib/basePadding";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar: React.FC<NavbarProps> = () => {
  const pathname = usePathname();

  const links = [{ name: "About", href: "/about" }];

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
            {pathname !== "/checkout" && <ShoppingBag />}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
