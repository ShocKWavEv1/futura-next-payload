import { Box, Heading, Text } from "@chakra-ui/react";
import { FooterProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import { TfiInstagram, TfiVimeo, TfiYoutube } from "react-icons/tfi";
import {
  headerFooterInGafferSizes,
  mainSectionSpacers,
} from "../../lib/baseResponsive/baseResponsive";

const Footer: React.FC<FooterProps> = () => {
  return (
    <Box w="100%" p={basePadding()}>
      <Box
        w="100%"
        mt={mainSectionSpacers}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Heading
          pb={["20px", "20px", "40px", "40px", "40px", "40px"]}
          variant={["H7BOLD", "H5BOLD", "H4BOLD", "H1BOLD", "H1BOLD"]}
          fontSize={headerFooterInGafferSizes}
          color="white"
          textAlign="center"
          cursor="pointer"
          _hover={{
            textDecoration: "underline",
          }}
        >
          #INGAFFERWETRVST
        </Heading>
      </Box>
      <Box
        w="100%"
        borderTop={"1.4px solid white"}
        borderColor="white"
        p={["20px 0px", "30px 0px", "20px 0px", "20px 0px", "20px 0px"]}
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
          <Text variant="MDMEDIUM" cursor="pointer">
            <TfiInstagram color="white" />
          </Text>
          <Text variant="MDMEDIUM" cursor="pointer">
            <TfiVimeo color="white" />
          </Text>
          <Text variant="MDMEDIUM" cursor="pointer">
            <TfiYoutube color="white" />
          </Text>
        </Box>
        <Text
          pt="20px"
          variant={["XSMEDIUM", "MDMEDIUM", "MDMEDIUM", "MDMEDIUM", "MDMEDIUM"]}
          color="white"
        >
          MMXXIV, FVTVRA | SLMRN
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
