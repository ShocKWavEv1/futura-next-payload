import { Box, Text } from "@chakra-ui/react";
import { CatalogItemProps } from "./model";
import Image from "next/image";
import buy_me from "../../../../theme/designSystem/assets/buy-me.svg";

const CatalogItem: React.FC<CatalogItemProps> = () => {
  return (
    <Box
      w="100%"
      display="grid"
      gridTemplateColumns="1fr"
      bg="white"
      borderRadius="12px"
      position="relative"
      className="catalog_item_container"
    >
      <Box
        w="100%"
        h="380px"
        borderTopLeftRadius="12px"
        borderTopRightRadius="12px"
      >
        <Box className="buyme_overlay">
          <Box
            mt="-14%"
            w="60%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            mixBlendMode="difference"
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
          <Text variant="MDMEDIUM" color="black">
            Compact Movil Tungsteno
          </Text>
        </Box>
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Text variant="XSMEDIUM" color="black">
            $10,999
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default CatalogItem;
