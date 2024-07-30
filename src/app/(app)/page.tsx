import React from "react";
import { Box } from "@chakra-ui/react";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import HeroCompact from "./components/heroCompact/heroCompact";
import RequirementsMovil from "./components/requirementsMovil/requirements";
import CatalogComponent from "./components/catalogComponent/catalogComponents";
import Reel from "./components/reel/reel";
import Originals from "./components/originals/originals";
import Footer from "./components/footer/footer";

const payload = await getPayloadHMR({ config: configPromise });

const Page = async () => {
  const catalog = await payload.find({
    collection: "catalog",
    limit: 100,
    sort: "createdAt",
  });

  return (
    <Box bg="black" w="100%" h="auto">
      <HeroCompact />
      <RequirementsMovil />
      <CatalogComponent catalog={catalog.docs} />
      <Reel />
      <Originals />
      <Footer />
    </Box>
  );
};

export default Page;
