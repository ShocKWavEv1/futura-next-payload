"use client";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { CatalogComponentProps } from "./model";
import CatalogHeader from "./catalogHeader/catalogHeader";
import CatalogInventory from "./catalogInventory/catalogInventory";
import Pagination from "../pagination/pagination";
import { urlCatalogPagination } from "../../lib/routes/routes";

const CatalogComponent: React.FC<CatalogComponentProps> = ({
  catalog,
  categories,
  totalPages,
  page,
  hasNextPage,
  hasPrevPage,
  limit,
  totalDocs,
}) => {
  const [initialLoad, setInitialLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(page);
  const [currentCatalog, setCurrentCatalog] = useState(catalog);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    if (!initialLoad) {
      console.log("handle", currentPage);
      handlePagination();
    }
  }, [currentPage]);

  const handlePagination = async () => {
    const response = await fetch(
      `${urlCatalogPagination}?currentPage=${currentPage}&limit=${limit}`
    );
    const data = await response.json();
    setCurrentCatalog(data?.catalog);
  };

  return (
    <Box w="100%" display="flex" flexDirection="column" mt="100px">
      <CatalogHeader categories={categories} />
      <CatalogInventory catalog={currentCatalog} />
      {catalog.length > 0 && (
        <Box
          w="100%"
          mt="40px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            setCurrentPage={(page: number) => setCurrentPage(page)}
            hasNextPage={hasNextPage}
            hasPrevPage={hasPrevPage}
            limit={limit}
            totalDocs={totalDocs}
          />
        </Box>
      )}
    </Box>
  );
};

export default CatalogComponent;
