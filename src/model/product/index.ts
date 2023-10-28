import { IVariant } from '@/interfaces';

export interface IGetProductsModel {
  category?: string;
  keyword?: string;
  limit?: number;
  page?: number;
  storeId?: string;
  ids?: string[];
}

export interface ICreateProduct {
  name?: string;

  categoryId?: string;

  variants?: IVariant[];

  images: IProductImage[];

  descriptions?: string;

  note?: string;
  price?: number;
}

export interface IProductImage {
  link: string;
}
