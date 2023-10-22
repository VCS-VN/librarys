import { STATUS } from '@/enum';
import { PAYMENT_TYPE } from '../../enum/payment';

export interface IStorePayment {
  code?: PAYMENT_TYPE;
  name?: string;
  status?: STATUS;
  icon?: string;
}

export interface IStoreMetadata {
  payments?: IStorePayment[];
}
