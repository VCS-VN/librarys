import { VariantType } from '@/enum';
import { IProduct } from './product';

export interface IVariant {
  id?: string;
  type?: VariantType;
  name?: string;
  options?: IOption[];
  minLength?: number;
  storeId?: string;
  products?: IProduct[];
}

export interface IOption {
  id?: string;
  value?: string;
  price?: number;
  metadata?: any;
  quantity?: number;
}
