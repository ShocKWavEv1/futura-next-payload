export interface CatalogComponentProps {
  catalog: any;
  categories: any;
  totalPages: number;
  page: number | undefined;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  limit: number;
  totalDocs: number;
}
