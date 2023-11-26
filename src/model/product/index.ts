import { STATUS } from '@/enum';
import { ICategory } from '@/model';

export interface IGetProductsModel {
  category?: string;
  categoryId?: string;
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

export interface IOption {
  id?: string;
  value?: string;
  price?: number;
  metadata?: any;
  quantity?: number;
}

export interface IVariant {
  id?: string;
  type?: string;
  name?: string;
  options?: IOption[];
}

export interface IProduct {
  id?: string;
  name?: string;
  quantity?: number;
  price?: number;
  variants?: IVariant[];
  total?: number;
  totalRemove?: number;
  note?: string;
  category?: ICategory;
  descriptions?: string;
  statusId?: STATUS;
  onlinePrice?: number;
}
