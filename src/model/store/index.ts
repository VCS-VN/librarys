import { STATUS } from '@/enum';
import { StripeSubscription } from '../stripe';
import { PAYMENT_TYPE } from '@/enum';
import { IDoorDashStore } from '../delivery';

export interface IStorePayment {
  code?: PAYMENT_TYPE;
  name?: string;
  statusId?: STATUS;
  icon?: string;
}

export interface IStorePaymentMetadata {
  payments?: IStorePayment[];
  delivery?: {
    doorDash?: IDoorDashStore;
  };
}

export interface IStoreDeliveryMetadata {
  deliveries?: {
    doorDash?: IDoorDashStore;
  };
}

export interface IStore {
  id?: string;
  name?: string;
  paymentMetadata?: IStorePaymentMetadata;
  deliveryMetadata?: IStoreDeliveryMetadata;
  slug?: string;
  subscriptionId?: string;
  subscription?: StripeSubscription;
  stripeCustomerId?: string;
  statusId?: STATUS;
  email?: string;
  locationId?: string;
  placeId?: string;
  userId?: string;
  address?: string;
  baseURL?: string;
  lat?: number;
  long?: number;
  orderTypes?: { name: string; code: string }[];
  priceId?: string;
  readerId?: string;
  businessType?: string;
  phoneNumber?: string;
}

export interface IUpdateStore extends IStore {}

export interface ICreateStore extends IStore {}
