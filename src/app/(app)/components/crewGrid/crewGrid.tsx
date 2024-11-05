import { Box, Heading, Text } from "@chakra-ui/react";
import { CrewGridProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import { mainSectionSpacers } from "../../lib/baseResponsive/baseResponsive";
import Image from "next/image";

const CrewGrid: React.FC<CrewGridProps> = ({ crew }) => {
  return (
    <Box
      w="100%"
      display="grid"
      gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 1fr", "1fr 1fr"]}
      mt={mainSectionSpacers}
      gap="40px"
      p={basePadding()}
    >
      {crew.map((member: any, idx: number) => {
        return (
          <Box
            key={member.name}
            w="100%"
            display="flex"
            flexDir="column"
            gap="20px"
          >
            <Box w="100%">
              <Image
                src={member.mainImageUrl}
                alt={member.name}
                placeholder="blur"
                blurDataURL={member.base64}
                width={400}
                height={400}
                unoptimized
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  aspectRatio: "1",
                }}
              />
            </Box>
            <Box>
              <Box w="100%" display="flex" flexDirection="column" px="70px">
                <Heading variant="H7BOLD" color="white" textAlign="left">
                  {member.name}
                </Heading>
                <Text variant="LGMEDIUM" color="white" textAlign="left">
                  {member.role}
                </Text>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CrewGrid;
