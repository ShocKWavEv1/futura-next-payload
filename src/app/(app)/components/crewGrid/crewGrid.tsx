"use client";
import { Box, Heading, Text } from "@chakra-ui/react";
import { CrewGridProps } from "./model";
import { basePadding } from "../../lib/basePadding";
import { mainSectionSpacers } from "../../lib/baseResponsive/baseResponsive";
import Image from "next/image";
import useSWR from "swr";
import { urlCrew } from "../../lib/routes/routes";
import { fetcher, swrOptions } from "../../lib/swr/swrConfig";
import { useEffect, useState } from "react";

const CrewGrid: React.FC<CrewGridProps> = ({ crew }) => {
  const [crewMembers, setCrewMembers] = useState(crew);
  const url = `${urlCrew}`;
  const { data, isLoading } = useSWR(url, fetcher, swrOptions);

  useEffect(() => {
    if (isLoading && data?.crew) {
      setCrewMembers(data?.crew);
    }
  }, [isLoading, data]);

  return (
    <Box
      w="100%"
      display="grid"
      gridTemplateColumns={["1fr", "1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr"]}
      mt={mainSectionSpacers}
      gap="40px"
      p={basePadding()}
    >
      {crewMembers.map((member: any, idx: number) => {
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
              <Box
                w="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Box w="80%">
                  <Heading variant="H7BOLD" color="white" textAlign="left">
                    {member.name}
                  </Heading>
                  <Text variant="LGMEDIUM" color="white" textAlign="left">
                    {member.role}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default CrewGrid;
