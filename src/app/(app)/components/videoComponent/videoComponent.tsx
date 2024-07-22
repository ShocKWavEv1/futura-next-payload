import { Box } from "@chakra-ui/react";
import { VideoComponentProps } from "./model";
import { basePadding } from "../../lib/basePadding";

const VideoComponent: React.FC<VideoComponentProps> = ({ video }) => {
  return (
    <Box p={basePadding()} mt="20px" w="100%" h="80svh" borderRadius="8px">
      <video
        controls={false}
        autoPlay={true}
        loop={true}
        playsInline={true}
        muted
        preload="auto"
        style={{
          width: "100%",
          height: "80svh",
          borderRadius: "12px",
          objectFit: "cover",
        }}
      >
        <source src="media/drones.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoComponent;
