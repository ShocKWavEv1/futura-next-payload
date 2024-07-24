import { Box, Text, Tooltip } from "@chakra-ui/react";
import { MenuItemProps } from "./model";
import { TfiInfoAlt } from "react-icons/tfi";
import PillStepper from "@/app/(app)/components/pillStepper/pillStepper";

const MenuItem: React.FC<MenuItemProps> = ({
  showPill = true,
  isCheckout = false,
}) => {
  return (
    <Box
      w="100%"
      h="auto"
      display="grid"
      gridTemplateColumns="auto 1fr"
      gap="10px"
    >
      <Box
        w={isCheckout ? "100px" : "140px"}
        h={isCheckout ? "100px" : "140px"}
        bg="purple.500"
        borderRadius="4px"
      ></Box>
      <Box
        w="100%"
        h={isCheckout ? "100px" : "140px"}
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
              Compact Movil Tungsteno
            </Text>
            <Box pt="10px">
              {showPill ? (
                <Tooltip
                  label="La cantidad máxima que puedes añadir de Compact movil Tungsteno"
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
                    Máxima cantidad: 1
                  </Text>
                </Tooltip>
              ) : (
                <Text variant="XSMEDIUM" color="white" display="flex" gap="5px">
                  Cantidad agregada: 1
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
            {showPill && <PillStepper />}
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
              $32,699
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
              <Box
                w="auto"
                p="2px 10px"
                bg="rgba(255, 255, 255, .1)"
                borderRadius="25em"
                display="flex"
                alignItems="center"
                justifyContent="center"
                cursor="pointer"
              >
                <Text variant="XSMEDIUM" color="white" fontSize="0.9vw">
                  Remover
                </Text>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MenuItem;
