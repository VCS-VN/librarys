import { PAYMENT_TYPE, STATUS } from '@/enum';
import { StripeSubscription } from '@/model';

export interface IStoreService {}

export interface IStore {
  id?: string;
  name?: string;
  metadata?: IStoreMetadata;
  slug?: string;
  subscriptionId?: string;
  subscription?: StripeSubscription;
  statusId?: STATUS;
  email?: string;
  locationId?: string;
  placeId?: string;
  userId?: string;
  address?: string;
  baseURL?: string;
  lat?: number;
  long?: number;
  orderTypes: { name: string; code: string }[];
  priceId?: string;
  readerId?: string;
}

export interface IStorePayment {
  code?: PAYMENT_TYPE;
  name?: string;
  statusId?: STATUS;
  icon?: string;
}

export interface IStoreMetadata {
  payments?: IStorePayment[];
}

export interface ICreateStore {
  id?: string;
  name?: string;
  metadata?: IStoreMetadata;
  slug?: string;
  subscriptionId?: string;
  statusId?: STATUS;
  email?: string;
  locationId?: string;
  placeId?: string;
  userId?: string;
  address?: string;
  baseURL?: string;
  lat?: number;
  long?: number;
  orderTypes: { name: string; code: string }[];
  priceId?: string;
  readerId?: string;
}
