import { Box, Heading, Text } from "@chakra-ui/react";
import { basePadding } from "../../lib/basePadding";
import { HeroCheckoutProps } from "./model";
import { mainContentHeaderSizes } from "../../lib/baseResponsive/baseResponsive";

const HeroCheckout: React.FC<HeroCheckoutProps> = () => {
  return (
    <Box w="100%" p={basePadding()}>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          w="100%"
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          borderBottom="1.4px solid white"
          pb={["30px", "30px", "40px", "40px", "40px", "40px"]}
        >
          <Heading
            pt={["30px", "30px", "40px", "40px", "40px", "40px"]}
            variant={[
              "H6BOLD",
              "H5BOLD",
              "H4BOLD",
              "H4BOLD",
              "H4BOLD",
              "H4BOLD",
            ]}
            color="white"
            textAlign="left"
          >
            ESTO{" "}
            <Text as="span" color="primary.500">
              NO ES UN CARRITO
            </Text>{" "}
            NADA MÁS ES PARA QUE{" "}
            <Text as="span" color="primary.500">
              TE DES UN QUEMÓN 🔥
            </Text>{" "}
            DE CUANTO TE VA A SALIR EL{" "}
            <Text as="span" color="primary.500">
              CHISTECITO.
            </Text>
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroCheckout;
