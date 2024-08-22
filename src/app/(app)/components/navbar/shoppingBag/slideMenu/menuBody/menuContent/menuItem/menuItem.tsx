import { Box, Text, Tooltip } from "@chakra-ui/react";
import { MenuItemProps } from "./model";
import { TfiInfoAlt } from "react-icons/tfi";
import PillStepper from "@/app/(app)/components/pillStepper/pillStepper";
import { calculateSinglePrice } from "@/app/(app)/utils/utils";
import Image from "next/image";
import RemoveFromCart from "@/app/(app)/components/removeFromCart/removeFromCart";

const MenuItem: React.FC<MenuItemProps> = ({
  showPill = true,
  isCheckout = false,
  item,
  index,
}) => {
  return (
    <Box
      w="100%"
      h="auto"
      display="grid"
      gridTemplateColumns={[
        "1fr",
        "auto 1fr",
        "auto 1fr",
        "auto 1fr",
        "auto 1fr",
      ]}
      gap="20px"
      key={item.mainImageUrl}
    >
      <Box
        w={isCheckout ? "120px" : "150px"}
        h={isCheckout ? "120px" : "150px"}
        bg="primary.500"
        borderRadius="4px"
        display={["none", "block", "block", "block", "block"]}
      >
        <Image
          src={item?.mainImageUrl}
          alt={item?.catalogItem?.name}
          width={200}
          height={200}
          placeholder="blur"
          blurDataURL={item?.base64}
          unoptimized
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
        h={[
          "120px",
          isCheckout ? "120px" : "150px",
          isCheckout ? "120px" : "150px",
          isCheckout ? "120px" : "150px",
          isCheckout ? "120px" : "150px",
        ]}
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
            <Text
              variant={[
                "MDMEDIUM",
                "MDMEDIUM",
                "LGMEDIUM",
                "LGMEDIUM",
                "LGMEDIUM",
              ]}
              color="white"
            >
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
                    fontSize={["14px", "14px", "auto", "auto", "auto"]}
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
            {showPill && <PillStepper item={item} index={index} />}
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
            <Text
              variant={[
                "XSMEDIUM",
                "XSMEDIUM",
                "SMMEDIUM",
                "SMMEDIUM",
                "SMMEDIUM",
              ]}
              color="white"
            >
              {calculateSinglePrice(item)}
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
