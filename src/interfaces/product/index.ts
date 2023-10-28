import { Status } from '@/model';
import { ICategory } from '../category';

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
  descriptions?: string
  status?: Status
}
