import { Box, Heading, Text } from "@chakra-ui/react";
import { basePadding } from "../../lib/basePadding";
import { AboutHeroProps } from "./model";

const AboutHero: React.FC<AboutHeroProps> = () => {
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
          borderBottom="1.4px solid white"
          pb={["30px", "30px", "40px", "40px", "40px", "40px"]}
        >
          <Heading
            pt={["30px", "30px", "40px", "40px", "40px", "40px"]}
            variant={[
              "H6BOLD",
              "H5BOLD",
              "H4BOLD",
              "H4BOLD",
              "H4BOLD",
              "H4BOLD",
            ]}
            color="white"
            textAlign="left"
          >
            A COLLECTION OF{" "}
            <Text as="span" color="primary.500">
              BAD IDEAS
            </Text>{" "}
            AND{" "}
            <Text as="span" color="primary.500">
              BAD ATTITUDE
            </Text>{" "}
            COME TO FRUITION.{" "}
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutHero;
