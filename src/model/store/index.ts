import { STATUS } from '@/enum';
import { PAYMENT_TYPE } from '../../enum/payment';
import { StripeSubscription } from '../stripe';

export interface IStorePayment {
  code?: PAYMENT_TYPE;
  name?: string;
  status?: STATUS;
  icon?: string;
}

export interface IStoreMetadata {
  payments?: IStorePayment[];
}

export interface IStore {
  id?: string;
  name?: string;
  metadata?: IStoreMetadata;
  slug?: string;
  subscriptionId?: string;
  subscription?: StripeSubscription;
}
