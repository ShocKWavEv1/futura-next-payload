import { Box, Heading, Text } from "@chakra-ui/react";
import { ReelProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import VideoComponent from "../videoComponent/videoComponent";

const Reel: React.FC<ReelProps> = () => {
  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      mt="100px"
      p={basePadding()}
    >
      <Box w="100%" pt="60px" borderTop="1.4px solid white" borderColor="white">
        <Heading
          variant="H1BOLD"
          fontSize="max(90px, 5.166667vw)"
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
      <VideoComponent video="media/fvtvra_reel.mp4" />
    </Box>
  );
};

export default Reel;
