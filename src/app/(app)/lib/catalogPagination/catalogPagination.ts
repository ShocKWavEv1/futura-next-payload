import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";
import { processData } from "../../utils/utils";

const payload = await getPayloadHMR({ config: configPromise });

export async function getCatalogPagination(
  currentPage: number,
  limit: any,
  category: number
) {
  try {
    const catalog = await payload.find({
      collection: "catalog",
      limit: parseInt(limit),
      sort: "createdAt",
      page: currentPage,
      where: {
        categories: {
          equals: category,
        },
      },
    });

    const updatedCatalog = await processData(catalog);

    return {
      status: 200,
      message: "Revalidated",
      catalog: updatedCatalog,
      totalPages: catalog.totalPages,
      page: catalog.page,
      hasNextPage: catalog.hasNextPage,
      hasPrevPage: catalog.hasPrevPage,
      limit: catalog.limit,
      totalDocs: catalog.totalDocs,
    };
  } catch (err) {
    console.error("CATALOG PAGINATION SERVICE", err);
    return { status: 500, message: err };
  }
}
