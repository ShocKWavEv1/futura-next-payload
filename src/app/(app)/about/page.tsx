import React from "react";
import { Box } from "@chakra-ui/react";
import AboutHero from "../components/aboutHero/aboutHero";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import CrewGrid from "../components/crewGrid/crewGrid";
import Footer from "../components/footer/footer";
import { processDataCrew } from "../utils/utils";

const payload = await getPayloadHMR({ config: configPromise });

const AboutPage = async () => {
  const crew = await payload.find({
    collection: "team",
    limit: 10,
    sort: "createdAt",
  });

  const updatedCrew: any = await processDataCrew(crew);

  return (
    <Box bg="black" w="100%" h="auto">
      <AboutHero />
      <CrewGrid crew={updatedCrew} />
      <Footer />
    </Box>
  );
};

export default AboutPage;
