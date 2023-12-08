import { PAYMENT_RESOURCE, PAYMENT_TYPE, STATUS } from '@/enum';

export interface IPayment {
  id?: string;
  userId?: string;
  amount?: number;
  countryId?: number;
  description?: string;
  descriptor?: string;
  statusId?: STATUS;
  resource?: PAYMENT_RESOURCE;
  provider?: string;
  type?: string;
  currency?: string;
  paymentType?: PAYMENT_TYPE;
  paymentId?: string;
  addedMoney?: boolean;
  fees?: number;
  net?: number;
  storeSlug?: string;
  intentId?: string;
  clientSecret?: string;
  addPaymentFees?: boolean;
}

export interface ICreatePayment {
  id?: string;
  userId?: string;
  amount?: number;
  countryId?: number;
  description?: string;
  descriptor?: string;
  statusId?: STATUS;
  resource?: PAYMENT_RESOURCE;
  provider?: string;
  type?: string;
  currency?: string;
  paymentType?: PAYMENT_TYPE;
  paymentId?: string;
  addedMoney?: boolean;
  fees?: number;
  net?: number;
  applicationFees?: number;
}
