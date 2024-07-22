import { Box, Text } from "@chakra-ui/react";
import { NavbarProps } from "./model";
import Image from "next/image";
import flama from "../../theme/designSystem/assets/flama-white.svg";
import ShoppingBag from "./shoppingBag/shoppingBag";
import { basePadding } from "../../lib/basePadding";

const Navbar: React.FC<NavbarProps> = () => {
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
            <Image
              src={flama}
              alt="flama"
              width={100}
              height={100}
              style={{ width: "100%", objectFit: "cover" }}
            />
          </Box>
          <Box
            width="100%"
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            flexDirection="row"
            gap="20px"
          >
            <Box display="flex" alignItems="center">
              <Text variant="MDREGULAR" color="white">
                About
              </Text>
            </Box>
            <Box display="flex" alignItems="center">
              <Text variant="MDREGULAR" color="white">
                Promos
              </Text>
            </Box>
            <ShoppingBag />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
