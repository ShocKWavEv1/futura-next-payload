import React from "react";
import { Box } from "@chakra-ui/react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import HeroCompact from "./components/heroCompact/heroCompact";
import VideoComponent from "./components/videoComponent/videoComponent";
import RequirementsMovil from "./components/requirementsMovil/requirements";
import CatalogComponent from "./components/catalogComponent/catalogComponents";

const payload = await getPayloadHMR({ config: configPromise });

const Page = async () => {
  const categories = await payload.find({
    collection: "categories",
    limit: 100,
    sort: "createdAt",
  });

  return (
    <Box bg="black" w="100%" h="auto">
      <HeroCompact />
      <VideoComponent video="" />
      <RequirementsMovil />
      <CatalogComponent />
      <Box w="100%" h="100vh" />
    </Box>
  );
};

export default Page;
