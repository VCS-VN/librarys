import { STATUS } from '@/enum';
import { ICategory, IVariant } from '@/model';

export interface IGetProductsModel {
  category?: string;
  categoryId?: string;
  keyword?: string;
  limit?: number;
  page?: number;
  storeId?: string;
  ids?: string[];
  statusId?: STATUS;
}

export interface ICreateProduct {
  name?: string;
  categoryId?: string;
  variants?: IVariant[];
  images: string[];
  descriptions?: string;
  note?: string;
  price?: number;
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
  images?: string[];
}
