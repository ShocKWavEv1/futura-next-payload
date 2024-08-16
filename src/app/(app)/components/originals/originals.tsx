"use client";
import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { basePadding } from "../../lib/basePadding";
import { OriginalsComponentProps } from "./model";
import OriginalsList from "./originalsList/originalList";
import OriginalsHeader from "./originalsHeader/originalsHeader";

const Originals: React.FC<OriginalsComponentProps> = ({ originals }) => {
  const [currentOriginal, setCurrentOriginal] = useState(
    originals?.find((category: any) => {
      return category.slug === "rompiendo-la-cuarta-pared";
    })
  );

  return (
    <Box
      w="100%"
      display="flex"
      flexDirection="column"
      mt="100px"
      p={basePadding()}
    >
      <Box w="100%" pt="60px" borderTop="1.4px solid white" borderColor="white">
        <Heading
          variant="H1BOLD"
          fontSize="max(90px, 5.166667vw)"
          color="white"
          textAlign="left"
        >
          A collection of{" "}
          <Text as="span" color="primary.500">
            bad ideas{" "}
          </Text>
          and{" "}
          <Text as="span" color="primary.500">
            bad attitude{" "}
          </Text>
          come to fruition.
        </Heading>
      </Box>
      <OriginalsHeader
        originals={currentOriginal}
        originalsCategories={originals}
        setCurrentOriginal={(original: any) => setCurrentOriginal(original)}
      />
      <OriginalsList originals={currentOriginal} />
    </Box>
  );
};

export default Originals;
