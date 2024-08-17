"use client";
import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import { CatalogComponentProps } from "./model";
import CatalogHeader from "./catalogHeader/catalogHeader";
import CatalogInventory from "./catalogInventory/catalogInventory";
import Pagination from "../pagination/pagination";
import { urlCatalogPagination } from "../../lib/routes/routes";
import { mainSectionSpacers } from "../../lib/baseResponsive/baseResponsive";

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
  const [currentCategory, setCurrentCategory] = useState(
    categories.find((category: any) => {
      return category.slug === "catalogo";
    })
  );
  const [currentTotalPages, setCurrentTotalPages] = useState(totalPages);
  const [currentHasNextPage, setCurrentHasNextPage] = useState(hasNextPage);
  const [currentHasPrevPage, setCurrentHasPrevPage] = useState(hasPrevPage);

  useEffect(() => {
    setInitialLoad(false);
  }, []);

  useEffect(() => {
    if (!initialLoad) {
      handleCategoryPagination();
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [currentPage]);

  useEffect(() => {
    if (!initialLoad) {
      setCurrentPage(page);
      handleCategoryPagination(1);
    }
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [currentCategory]);

  const handleCategoryPagination = async (page: any = currentPage) => {
    const response = await fetch(
      `${urlCatalogPagination}?currentPage=${page}&limit=${limit}&category=${currentCategory?.id}`
    );
    const data = await response.json();
    setCurrentCatalog(data?.catalog);
    setCurrentTotalPages(data?.totalPages);
    setCurrentHasNextPage(data?.hasNextPage);
    setCurrentHasPrevPage(data?.hasPrevPage);
  };

  return (
    <Box w="100%" display="flex" flexDirection="column" mt={mainSectionSpacers}>
      <CatalogHeader
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={(category: any) => setCurrentCategory(category)}
      />
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
            totalPages={currentTotalPages}
            currentPage={currentPage}
            setCurrentPage={(page: number) => setCurrentPage(page)}
            hasNextPage={currentHasNextPage}
            hasPrevPage={currentHasPrevPage}
            limit={limit}
            totalDocs={totalDocs}
          />
        </Box>
      )}
    </Box>
  );
};

export default CatalogComponent;
