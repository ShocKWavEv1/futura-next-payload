import { getPayloadHMR } from "@payloadcms/next/utilities";
import configPromise from "@payload-config";

const payload = await getPayloadHMR({ config: configPromise });

export async function getCatalogPagination(currentPage: number, limit: number) {
  try {
    const catalog = await payload.find({
      collection: "catalog",
      limit: limit,
      sort: "createdAt",
      page: currentPage,
    });
    return {
      status: 200,
      message: "Revalidated",
      catalog: catalog.docs,
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
