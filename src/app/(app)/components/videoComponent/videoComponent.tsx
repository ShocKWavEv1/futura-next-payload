import { Box } from "@chakra-ui/react";
import { VideoComponentProps } from "./model";

const VideoComponent: React.FC<VideoComponentProps> = ({ video }) => {
  return (
    <Box mt="20px" w="100%" h="80svh" bg="white" borderRadius="12px">
      <video
        controls={false}
        autoPlay={true}
        loop={true}
        playsInline={true}
        muted
        style={{
          width: "100%",
          height: "80svh",
          borderRadius: "12px",
          objectFit: "cover",
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Box>
  );
};

export default VideoComponent;
