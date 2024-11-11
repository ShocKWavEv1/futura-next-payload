import { Box, Heading, Text } from "@chakra-ui/react";
import { ReelProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import VideoComponent from "../videoComponent/videoComponent";
import {
  mainContentHeaderSizes,
  mainContentLineHeightSizes,
  mainSectionSpacers,
} from "../../lib/baseResponsive/baseResponsive";

const Reel: React.FC<ReelProps> = ({ reelVideo }) => {
  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      mt={mainSectionSpacers}
      p={basePadding()}
    >
      <Box
        w="100%"
        pt={["60px", "50px", "60px", "60px", "60px", "60px"]}
        borderTop="1.4px solid white"
        borderColor="white"
      >
        <Heading
          variant="H1BOLD"
          fontSize={mainContentHeaderSizes}
          lineHeight={mainContentLineHeightSizes}
          color="white"
          textAlign="left"
        >
          Once again{" "}
          <Text as="span" color="primary.500">
            Fvtvra
          </Text>{" "}
          defies the odds with the 2k21 video reel collection.
        </Heading>
      </Box>
      <VideoComponent video={reelVideo.videoUrl} />
    </Box>
  );
};

export default Reel;
