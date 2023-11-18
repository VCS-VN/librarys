import { STATUS } from '@/enum';
import { IProduct } from '../product';

export interface ICategory {
  id?: string;
  name?: string;
  statusId?: STATUS;
  createdAt?: Date;
  sortIndex?: number;
  products?: IProduct[];
}
