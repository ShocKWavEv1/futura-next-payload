import { Box, Button, Heading } from "@chakra-ui/react";
import { HeroCompactProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import VideoComponent from "../videoComponent/videoComponent";

const HeroCompact: React.FC<HeroCompactProps> = () => {
  return (
    <Box w="100%" p={basePadding()}>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          w="100%"
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Heading
            pt="50px"
            variant="H1BOLD"
            fontSize="max(90px, 8.166667vw)"
            color="white"
            textAlign="left"
          >
            Compact Movil
          </Heading>
        </Box>
        <Box
          w="100%"
          display="flex"
          alignItems="flex-start"
          justifyContent="flex-start"
        >
          <Heading
            pb="40px"
            variant="H1BOLD"
            fontSize="max(90px, 8.166667vw)"
            color="white"
            textAlign="left"
          >
            Grip & Electric Van
          </Heading>
        </Box>
      </Box>
      <Box
        w="100%"
        display="grid"
        gridTemplateColumns="auto 1fr"
        gap="10px"
        pb="40px"
        borderBottom="1.4px solid white"
      >
        <Box w="100%" gap="10px" display="flex">
          <Button shadow="2xl" size="sm" className="view" variant="white">
            ¿Que contiene?
          </Button>
          <Button shadow="2xl" size="sm" className="view" variant="white">
            Promociones
          </Button>
        </Box>
        <Box>
          <Button shadow="2xl" size="sm" className="view" colorScheme="primary">
            Descargar lista de equipo
          </Button>
        </Box>
      </Box>
      <Box w="100%">
        <VideoComponent video="media/movil.mp4" />
      </Box>
    </Box>
  );
};

export default HeroCompact;
