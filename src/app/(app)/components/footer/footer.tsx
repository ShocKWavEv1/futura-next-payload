import { Box, Heading, Text } from "@chakra-ui/react";
import { FooterProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import { TfiInstagram, TfiVimeo, TfiYoutube } from "react-icons/tfi";

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box w="100%" p={basePadding()}>
      <Box
        w="100%"
        mt="100px"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          pb="40px"
          variant="H1BOLD"
          fontSize="max(90px, 8.166667vw)"
          color="white"
          textAlign="center"
        >
          #INGAFFERWETRVST
        </Heading>
      </Box>
      <Box
        w="100%"
        borderTop={"1.4px solid white"}
        borderColor="white"
        p="20px 0px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          gap="20px"
        >
          <Text variant="MDMEDIUM">
            <TfiInstagram color="white" />
          </Text>
          <Text variant="MDMEDIUM">
            <TfiVimeo color="white" />
          </Text>
          <Text variant="MDMEDIUM">
            <TfiYoutube color="white" />
          </Text>
        </Box>
        <Text pt="20px" variant="MDMEDIUM" color="white">
          MMXXIV, FVTVRA | SLMRN
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
