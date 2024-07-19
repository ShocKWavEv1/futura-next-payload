import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { basePadding } from "./lib/basePadding";

const payload = await getPayloadHMR({ config: configPromise });

const Page = async () => {
  const categories = await payload.find({
    collection: "categories",
    limit: 100,
    sort: "createdAt",
  });

  const team = await payload.find({
    collection: "team",
    limit: 100,
    sort: "createdAt",
  });

  return (
    <Box bg="black" padding={basePadding()} w="100%" h="100vh">
      <Box
        w="100%"
        h="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Heading variant="H3BOLD" color="white" textAlign="center">
          Hi Futura Next App Router and Payload 3.0
        </Heading>
        <Heading pt="20px" variant="H6BOLD" color="white" textAlign="center">
          Fetch Categories: {categories.docs[0]?.text}
        </Heading>
        <Heading pt="20px" variant="H6BOLD" color="white" textAlign="center">
          Team: {team.docs[0]?.name}
        </Heading>
      </Box>
    </Box>
  );
};

export default Page;
