import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { processDataCrew } from "../../utils/utils";

const payload = await getPayloadHMR({ config: configPromise });

export async function getCrew() {
  try {
    const crew = await payload.find({
      collection: "team",
      limit: 10,
      sort: "createdAt",
    });

    if (!crew?.docs) {
      return {
        status: 404,
        message: "Crew not found",
        crew: [],
      };
    }

    await processDataCrew(crew);

    return {
      status: 200,
      message: "Revalidated",
      crew: crew.docs,
    };
  } catch (err) {
    console.error("CREW SERVICE", err);
    return { status: 500, message: err };
  }
}
