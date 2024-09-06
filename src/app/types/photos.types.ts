export interface SearchPhotosParams {
  query: string;
  page?: number;
  perPage?: number;
  orderBy?: 'latest' | 'relevant';
  orientation?: 'landscape' | 'portrait' | 'squarish';
}
