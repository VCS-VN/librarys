import { VariantType } from '@/enum';

export interface IVariant {
  id?: string;
  type?: VariantType;
  name?: string;
  options?: IOption[];
  minLength?: number;
  storeId?: string;
}

export interface IOption {
  id?: string;
  value?: string;
  price?: number;
  metadata?: any;
  quantity?: number;
}
