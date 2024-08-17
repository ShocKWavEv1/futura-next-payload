import { Box, Heading, Text } from "@chakra-ui/react";
import { ModalPromosProps } from "./model";
import { formatPrice } from "../../../utils/utils";

const ModalPromos: React.FC<ModalPromosProps> = ({ promos, handleClose }) => {
  return (
    <Box w="100%">
      <Box w="100%" display="flex" flexDirection="column" gap="40px">
        {promos.map((promo: any, index: number) => {
          return (
            <Box
              key={promo.name}
              w="100%"
              display="flex"
              alignItems="flex-start"
              justifyContent="center"
              flexDirection="column"
              gap="30px"
            >
              <Heading variant="H6BOLD" color="white">
                {promo.name}
              </Heading>
              <Box
                w="100%"
                gap="20px"
                display="grid"
                gridTemplateColumns={[
                  "1fr",
                  "1fr 1fr",
                  "1fr 1fr",
                  "1fr 1fr",
                  "1fr 1fr",
                  "1fr 1fr",
                ]}
              >
                {promo?.promos?.map((item: any, index: number) => {
                  const temporalityLabel =
                    item.temporality === "dia"
                      ? `X ${item.temporality}`
                      : item.temporality === "off"
                      ? "OFF"
                      : "";
                  return (
                    <Box
                      w="100%"
                      border="1.4px solid white"
                      borderRadius="4px"
                      p="15px"
                      key={item?.id}
                      display="flex"
                      alignItems="flex-start"
                      justifyContent="center"
                      flexDirection="column"
                      gap="10px"
                    >
                      <Heading variant="H7BOLD" color="white">
                        {item.temporality === "off"
                          ? `${item.price}%`
                          : formatPrice(item.price)}{" "}
                        <Heading as="span" variant="H7BOLD" color="white">
                          {temporalityLabel}
                        </Heading>
                      </Heading>
                      <Text variant="XSBOLD" color="primary.500">
                        {item.name}
                      </Text>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ModalPromos;
