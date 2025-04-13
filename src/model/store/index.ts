import { BUSINESS_TYPE, STATUS, PAYMENT_TYPE, WEEK_DAY } from '@/enum';
import { StripeSubscription } from '../stripe';
import { IDoorDashStore } from '../delivery';

export interface IStorePayment {
  code?: PAYMENT_TYPE;
  name?: string;
  statusId?: STATUS;
  icon?: string;
}

export interface IStorePaymentMetadata {
  payments?: IStorePayment[];
  tyro?: {
    percent: number;
  };
}

export interface IStoreDeliveryMetadata {
  deliveries?: {
    doorDash?: IDoorDashStore;
  };
}

export interface IBusinessHour {
  id?: string;
  weekDate?: WEEK_DAY;
  openHour?: string;
  closeHour?: string;
  storeId?: string;
  statusId?: STATUS;
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
  businessType?: BUSINESS_TYPE;
  phoneNumber?: string;
  servicePercent?: number;
  businessHours?: IBusinessHour[];
  timezone?: string;
}

export interface IStoreSetting {
  id: string;
  store: Partial<IStore>;
  isVerifiedProfile: boolean;
  currency: string;
  stripeAccountId: string;
  verifiedRequirements: any;
  paymentMethods: Partial<IVerifiedProfilePaymentMethod>[];
}

export interface IVerifiedProfilePaymentMethod {
  type: PAYMENT_TYPE;
  title: string;
  source: string[];
  fee: Partial<{
    percent: number;
    amount: number;
  }>;
}

export interface IUpdateStore extends IStore {}

export interface ICreateStore extends IStore {}
