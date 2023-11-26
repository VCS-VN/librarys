import { STATUS } from '@/enum';
import { IProduct } from '../product';

export interface IGetCategoriesQueryModel {
  keyword?: string;
  limit?: number;
  page?: number;
  storeId?: string;
}

export interface ICreateCategory {
  name: string;
}

export interface ICategory {
  id?: string;
  name?: string;
  statusId?: STATUS;
  createdAt?: Date;
  sortIndex?: number;
  products?: IProduct[];
}
