export interface IGetCategoriesQueryModel {
  keyword?: string;
  limit?: number;
  page?: number;
  storeId?: string;
}

export interface ICreateCategory {
  name: string;
}
