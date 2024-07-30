import { Box, Text, Tooltip } from "@chakra-ui/react";
import { MenuItemProps } from "./model";
import { TfiInfoAlt } from "react-icons/tfi";
import PillStepper from "@/app/(app)/components/pillStepper/pillStepper";
import { formatPrice } from "@/app/(app)/utils/utils";
import Image from "next/image";
import RemoveFromCart from "@/app/(app)/components/removeFromCart/removeFromCart";

const MenuItem: React.FC<MenuItemProps> = ({
  showPill = true,
  isCheckout = false,
  item,
}) => {
  console.log("item", item);
  return (
    <Box
      w="100%"
      h="auto"
      display="grid"
      gridTemplateColumns="auto 1fr"
      gap="20px"
    >
      <Box
        w={isCheckout ? "100px" : "150px"}
        h={isCheckout ? "100px" : "150px"}
        bg="primary.500"
        borderRadius="4px"
      >
        <Image
          src={item?.catalogItem?.mainImage?.url}
          alt="item"
          width={140}
          height={140}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "4px",
          }}
        />
      </Box>
      <Box
        w="100%"
        h={isCheckout ? "100px" : "150px"}
        display="grid"
        gridTemplateColumns="1fr auto"
      >
        <Box w="100%" display="grid" gridTemplateColumns="1fr">
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="flex-start"
            justifyContent="flex-start"
            flexDirection="column"
          >
            <Text variant="LGMEDIUM" color="white">
              {item?.catalogItem?.name}
            </Text>
            <Box pt="10px">
              {showPill ? (
                <Tooltip
                  label={`La cantidad máxima que puedes añadir de ${item?.catalogItem?.name}`}
                  placement="bottom-start"
                  bg="white"
                  p="10px"
                  color="black"
                  fontFamily="Futura"
                  fontSize="12px"
                >
                  <Text
                    variant="XSMEDIUM"
                    color="white"
                    display="flex"
                    gap="5px"
                  >
                    <Box
                      w="auto"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <TfiInfoAlt />
                    </Box>
                    Máxima cantidad: {item?.catalogItem?.maxQuantity}
                  </Text>
                </Tooltip>
              ) : (
                <Text variant="XSMEDIUM" color="white" display="flex" gap="5px">
                  Cantidad agregada: {item?.quantity}
                </Text>
              )}
            </Box>
          </Box>
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="flex-end"
            justifyContent="flex-start"
          >
            {showPill && <PillStepper item={item} />}
          </Box>
        </Box>
        <Box w="100%" display="grid" gridTemplateColumns="1fr">
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
          >
            <Text variant="SMMEDIUM" color="white">
              {formatPrice(item?.catalogItem?.price)}
            </Text>
          </Box>
          <Box
            w="100%"
            h="100%"
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
          >
            {showPill && (
              <RemoveFromCart item={item} type="single" text="Remover" />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuItem;
