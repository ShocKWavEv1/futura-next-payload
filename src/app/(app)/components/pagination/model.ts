export interface PaginationProps {
  totalPages: number;
  currentPage: any;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  totalDocs: number;
  setCurrentPage: (page: number) => void;
}
