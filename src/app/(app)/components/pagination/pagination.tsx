"use client";
import { Box, Text } from "@chakra-ui/react";
import { PaginationProps } from "./model";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  hasNextPage,
  hasPrevPage,
  limit,
  totalDocs,
  setCurrentPage,
}) => {
  const handlePageClick = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <Box
      w="auto"
      p="10px"
      gap="10px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
    >
      <Box
        w="30px"
        h="30px"
        p="5px"
        borderRadius="2px"
        bg="black"
        border="1px solid white"
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        _hover={{ bg: "white", color: "black" }}
        onClick={() => handlePageClick(currentPage - 1)}
      >
        <Text variant="XSMEDIUM" fontSize="14px">
          <TfiAngleLeft />
        </Text>
      </Box>
      {Array.from({ length: totalPages }, (_, index) => {
        const currentIndex = index + 1;
        return (
          <Box
            key={currentIndex}
            w="30px"
            h="30px"
            p="5px"
            borderRadius="2px"
            bg={currentPage === currentIndex ? "white" : "black"}
            border="1px solid white"
            cursor="pointer"
            display="flex"
            alignItems="center"
            justifyContent="center"
            _hover={{
              bg: currentPage === currentIndex ? "white" : "rgba(0,0,0,.75)",
            }}
            onClick={() => handlePageClick(currentIndex)}
          >
            <Text
              variant="XSMEDIUM"
              color={currentPage === currentIndex ? "black" : "white"}
            >
              {currentIndex}
            </Text>
          </Box>
        );
      })}
      <Box
        w="30px"
        h="30px"
        p="5px"
        borderRadius="2px"
        bg="black"
        border="1px solid white"
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        color="white"
        _hover={{ bg: "white", color: "black" }}
        onClick={() => handlePageClick(currentPage + 1)}
      >
        <Text variant="XSMEDIUM" fontSize="14px">
          <TfiAngleRight />
        </Text>
      </Box>
    </Box>
  );
};

export default Pagination;
