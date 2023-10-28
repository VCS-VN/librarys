import { Status } from '@/model';
import { IProduct } from '../product';

export interface ICategory {
  id?: string;
  name?: string;
  status?: Status;
  createdAt?: Date;
  products: IProduct[];
}
