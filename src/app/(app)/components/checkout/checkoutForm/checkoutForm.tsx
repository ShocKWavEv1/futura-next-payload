import { Box, Heading, Text } from "@chakra-ui/react";
import { CheckoutFormProps } from "./model";
import CheckoutFormData from "./checkoutFormData/checkoutFormData";

const CheckoutForm: React.FC<CheckoutFormProps> = () => {
  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
    >
      <Heading variant="H6BOLD" color="white">
        SOLO UNOS DATOS MAS…
      </Heading>
      <Text pt="10px" variant="SMMEDIUM" color="white">
        Estos campos no son obligatorios pero nos ayudarían para agilizar tu
        cotización
      </Text>
      <CheckoutFormData />
    </Box>
  );
};

export default CheckoutForm;
