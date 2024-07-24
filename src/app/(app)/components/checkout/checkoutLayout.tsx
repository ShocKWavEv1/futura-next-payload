import { Box } from "@chakra-ui/react";
import { CheckoutLayoutProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import CheckoutItems from "./checkoutItems/checkoutItems";
import CheckoutForm from "./checkoutForm/checkoutForm";

const CheckoutLayout: React.FC<CheckoutLayoutProps> = () => {
  return (
    <Box
      w="100%"
      p={basePadding()}
      mt="60px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box width="90%" display="grid" gap="30px" gridTemplateColumns="1fr 1fr">
        <Box
          w="100%"
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
          flexDirection="column"
        >
          <CheckoutForm />
        </Box>
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CheckoutItems />
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutLayout;
