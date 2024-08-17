import { Box, Heading, Text } from "@chakra-ui/react";
import { RequirementsMovilProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import MarqueeParallax from "../marqueeParallax/marqueeParallax";
import {
  mainContentHeaderSizes,
  mainContentLineHeightSizes,
  mainSectionSpacers,
} from "../../lib/baseResponsive/baseResponsive";

const RequirementsMovil: React.FC<RequirementsMovilProps> = ({
  requirements,
}) => {
  return (
    <Box w="100%" display="flex" flexDirection="column" mt={mainSectionSpacers}>
      <Box w="100%" p={basePadding()}>
        <Heading
          variant="H1BOLD"
          fontSize={mainContentHeaderSizes}
          lineHeight={mainContentLineHeightSizes}
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
      <MarqueeParallax requirements={requirements} />
    </Box>
  );
};

export default RequirementsMovil;
