"use client";
import { Box, Button, Heading } from "@chakra-ui/react";
import { HeroCompactProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import VideoComponent from "../videoComponent/videoComponent";
import { ModalKeys, useStoreZustand } from "../../lib/zustand/zustandStore";
import { AnimatePresence } from "framer-motion";
import Modal from "../modal/modal";
import ModalPromos from "../modals/modalPromos/modalPromos";
import ModalWhatContain from "../modals/modalWhatContain/modalWhatContain";
import {
  mainHeaderLineHeightSizes,
  mainHeaderSizes,
} from "../../lib/baseResponsive/baseResponsive";

const HeroCompact: React.FC<HeroCompactProps> = ({
  promos,
  filesDownload,
  promoVideo,
  movilVideo,
}) => {
  const { modals, setModalOpen } = useStoreZustand();
  const modalName: ModalKeys = "promosHero";
  const modalNameWhatContain: ModalKeys = "whatContain";

  const download = filesDownload[0]?.data[0]?.fileDownload?.url;

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
            pt={["30px", "30px", "40px", "40px", "40px", "40px"]}
            variant="H1BOLD"
            fontSize={mainHeaderSizes}
            color="white"
            textAlign="left"
            lineHeight={mainHeaderLineHeightSizes}
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
            pb={["20px", "20px", "40px", "40px", "40px", "40px"]}
            variant="H1BOLD"
            fontSize={mainHeaderSizes}
            color="white"
            textAlign="left"
            lineHeight={mainHeaderLineHeightSizes}
          >
            Grip & Electric Van
          </Heading>
        </Box>
      </Box>
      <Box
        w="100%"
        display="grid"
        gridTemplateColumns={["1fr", "1fr", "auto 1fr", "auto 1fr", "auto 1fr"]}
        gap="10px"
        pb={["30px", "30px", "40px", "40px", "40px", "40px"]}
        borderBottom="1.4px solid white"
      >
        <Box w="100%" gap="10px" display="flex">
          <Button
            shadow="2xl"
            size="sm"
            className="view"
            variant="white"
            onClick={() => setModalOpen(modalNameWhatContain)}
          >
            ¿Que contiene?
          </Button>
          <Button
            display={["none", "flex", "flex", "flex", "flex", "flex"]}
            onClick={() => setModalOpen(modalName)}
            shadow="2xl"
            size="sm"
            className="view"
            variant="white"
          >
            Promociones
          </Button>
        </Box>
        <Box display={["block", "none", "none", "none", "none", "none"]}>
          <Button
            onClick={() => setModalOpen(modalName)}
            shadow="2xl"
            size="sm"
            className="view"
            variant="white"
          >
            Promociones
          </Button>
        </Box>
        <Box>
          <a href={download} download>
            <Button
              shadow="2xl"
              size="sm"
              className="view"
              colorScheme="primary"
            >
              Descargar lista de equipo
            </Button>
          </a>
        </Box>
      </Box>
      <Box w="100%">
        <VideoComponent video={movilVideo.videoUrl} />
      </Box>
      <AnimatePresence mode="wait">
        {modals.promosHero && (
          <Modal handleClose={() => setModalOpen(modalName)}>
            <ModalPromos
              promos={promos}
              handleClose={() => setModalOpen(modalName)}
            />
          </Modal>
        )}
        {modals.whatContain && (
          <Modal handleClose={() => setModalOpen(modalNameWhatContain)}>
            <ModalWhatContain
              urlVideo={promoVideo.videoUrl}
              handleClose={() => setModalOpen(modalNameWhatContain)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default HeroCompact;
