import { Box } from "@chakra-ui/react";
import { ModalWhatContainProps } from "./modal";
import VideoComponent from "../../videoComponent/videoComponent";

const ModalWhatContain: React.FC<ModalWhatContainProps> = ({
  handleClose,
  urlVideo,
}) => {
  return (
    <Box w="100%">
      <VideoComponent video={urlVideo} height="60dvh" />
    </Box>
  );
};

export default ModalWhatContain;
