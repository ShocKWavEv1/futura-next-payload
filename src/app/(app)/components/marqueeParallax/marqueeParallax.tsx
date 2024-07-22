"use client";

import { Box, Text } from "@chakra-ui/react";
import { MarqueeParallaxProps } from "./model";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MarqueeParallax: React.FC<MarqueeParallaxProps> = () => {
  const container: any = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <Box mt="100px" w="100%" overflow="hidden">
      <Box
        borderTop="1.4px solid white"
        borderBottom="1.4px solid white"
        borderColor="white"
        w="100%"
        p="20px 0px"
        ref={container}
      >
        <Slide direction={"left"} left={"-40%"} progress={scrollYProgress} />
      </Box>
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
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase = (props: any) => {
  return (
    <Box
      px="25px"
      display="flex"
      gap="20px"
      alignItems="center"
      justifyContent="center"
    >
      <Text
        variant="LGBOLD"
        fontSize="3.5vw"
        color="white"
        textTransform="uppercase"
      >
        🔥
      </Text>
      <Text
        variant="LGBOLD"
        fontSize="3.5vw"
        color="white"
        textTransform="uppercase"
        className="requirements"
      >
        See all 3 Requirements
      </Text>
      <Text
        variant="LGBOLD"
        fontSize="3.5vw"
        color="white"
        textTransform="uppercase"
      >
        🔥
      </Text>
    </Box>
  );
};
