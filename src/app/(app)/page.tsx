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
  const filesDownload = await payload.find({
    collection: "filesDownload",
    limit: 10,
    sort: "createdAt",
  });

  const catalog = await payload.find({
    collection: "catalog",
    limit: 100,
    sort: "createdAt",
  });

  const promos = await payload.find({
    collection: "promos",
    limit: 10,
    sort: "createdAt",
  });

  const requirements = await payload.find({
    collection: "requirements",
    limit: 10,
    sort: "createdAt",
  });

  const categories = await payload.find({
    collection: "categories",
    limit: 10,
    sort: "createdAt",
  });

  const originals = await payload.find({
    collection: "originals",
    limit: 10,
    sort: "createdAt",
  });

  return (
    <Box bg="black" w="100%" h="auto">
      <HeroCompact promos={promos.docs} filesDownload={filesDownload.docs} />
      <RequirementsMovil requirements={requirements.docs} />
      <CatalogComponent catalog={catalog.docs} categories={categories.docs} />
      <Reel />
      <Originals originals={originals.docs} />
      <Footer />
    </Box>
  );
};

export default Page;
