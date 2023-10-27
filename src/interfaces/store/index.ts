import { PAYMENT_TYPE, STATUS } from '@/enum';
import { Status, StripeSubscription } from '@/model';

export interface IStoreService {}

export interface IStore {
  id?: string;
  name?: string;
  metadata?: IStoreMetadata;
  slug?: string;
  subscriptionId?: string;
  subscription?: StripeSubscription;
  status?: Status;
  email?: string;
  locationId?: string;
  placeId?: string;
  userId?: string;
  address?: string;
  baseURL?: string;
}

export interface IStorePayment {
  code?: PAYMENT_TYPE;
  name?: string;
  status?: STATUS;
  icon?: string;
}

export interface IStoreMetadata {
  payments?: IStorePayment[];
}

export interface IUpdateOrder {}
