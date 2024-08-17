"use client";

import { Box, Text } from "@chakra-ui/react";
import { MarqueeParallaxProps } from "./model";
import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ModalKeys, useStoreZustand } from "../../lib/zustand/zustandStore";
import Modal from "../modal/modal";
import ModalRequirements from "../modals/modalRequirements/modalRequirements";
import {
  mainSectionSpacers,
  marqueeParallaxSizes,
} from "../../lib/baseResponsive/baseResponsive";

const MarqueeParallax: React.FC<MarqueeParallaxProps> = ({ requirements }) => {
  const [isHover, setIsHover] = useState(false);
  const container: any = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const { modals, setModalOpen } = useStoreZustand();
  const modalName: ModalKeys = "requirements";

  return (
    <Box mt={mainSectionSpacers} w="100%" overflow="hidden">
      <Box
        borderTop="1.4px solid white"
        borderBottom="1.4px solid white"
        borderColor="white"
        w="100%"
        p="20px 0px"
        ref={container}
        cursor="pointer"
        onClick={() => setModalOpen(modalName)}
      >
        <Slide
          direction={"left"}
          left={"-40%"}
          progress={scrollYProgress}
          isHover={isHover}
          setHover={() => setIsHover(!isHover)}
          length={requirements[0]?.requirements?.length}
        />
      </Box>
      <AnimatePresence mode="wait">
        {modals.requirements && (
          <Modal handleClose={() => setModalOpen(modalName)}>
            <ModalRequirements
              requirements={requirements}
              handleClose={() => setModalOpen(modalName)}
            />
          </Modal>
        )}
      </AnimatePresence>
    </Box>
  );
};

export default MarqueeParallax;

const Slide = (props: any) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  const phrases = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <motion.div
      style={{
        x: translateX,
        left: props.left,
        position: "relative",
        display: "flex",
        whiteSpace: "nowrap",
      }}
    >
      {phrases.map((phrases, index) => {
        return (
          <Phrase
            key={phrases + index}
            src={props.src}
            isHover={props.isHover}
            setHover={() => props.setHover()}
            length={props.length}
          />
        );
      })}
    </motion.div>
  );
};

const Phrase = ({
  src,
  isHover,
  setHover,
  length,
}: {
  src: any;
  isHover: boolean;
  setHover: any;
  length: any;
}) => {
  return (
    <Box
      px="25px"
      display="flex"
      gap="20px"
      alignItems="center"
      justifyContent="center"
      onMouseEnter={() => setHover()}
      onMouseLeave={() => setHover()}
    >
      <Text
        variant="LGBOLD"
        fontSize={marqueeParallaxSizes}
        color="white"
        textTransform="uppercase"
      >
        🔥
      </Text>
      <Text
        variant="LGBOLD"
        fontSize={marqueeParallaxSizes}
        color="white"
        textTransform="uppercase"
        className={!isHover ? "requirements" : "requirements_hover"}
      >
        See all {length} Requirements
      </Text>
      <Text
        variant="LGBOLD"
        fontSize={marqueeParallaxSizes}
        color="white"
        textTransform="uppercase"
      >
        🔥
      </Text>
    </Box>
  );
};
