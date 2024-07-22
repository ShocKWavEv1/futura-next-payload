import { Box, Heading, Text } from "@chakra-ui/react";
import { RequirementsMovilProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import MarqueeParallax from "../marqueeParallax/marqueeParallax";

const RequirementsMovil: React.FC<RequirementsMovilProps> = () => {
  return (
    <Box w="100%" display="flex" flexDirection="column" mt="60px">
      <Box w="100%" p={basePadding()}>
        <Heading
          variant="H1BOLD"
          fontSize="max(90px, 5.166667vw)"
          color="white"
          textAlign="left"
        >
          Life shouldn’t be so black and white.{" "}
          <Text as="span" color="primary.500">
            Fvtvra
          </Text>{" "}
          brings the brightest flame casts.
        </Heading>
      </Box>
      <MarqueeParallax />
    </Box>
  );
};

export default RequirementsMovil;
