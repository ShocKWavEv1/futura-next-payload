import { Box } from "@chakra-ui/react";
import { ModalOriginalVideoProps } from "./model";
import ReactPlayer from "react-player/lazy";

const ModalOriginalVideo: React.FC<ModalOriginalVideoProps> = ({
  originalVideo,
  handleClose,
}) => {
  return (
    <Box w="100%" h="65dvh" display="flex" flexDirection="column" gap="20px">
      <ReactPlayer url={originalVideo} width="100%" height="100%" controls />
    </Box>
  );
};

export default ModalOriginalVideo;
