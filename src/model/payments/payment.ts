import { ENTITY_TYPE, PAYMENT_RESOURCE, PAYMENT_TYPE, STATUS } from '@/enum';

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
  approvedAt?: Date;
  storeId?: string;
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
  currency?: string;
  paymentType?: PAYMENT_TYPE;
  paymentId?: string;
  addedMoney?: boolean;
  fees?: {
    merchantFees: number;
    serviceFees: number;
    paymentFees: number;
    deliveryFees: number;
    pickupFees?: number;
  };
  net?: number;
  applicationFees?: number;
  storeId?: string;
}

export interface IGetPayments {
  paymentType?: PAYMENT_TYPE;
  storeId?: string;
  fromDate?: Date;
  toDate?: Date;
  status?: STATUS;
  storeSlug?: string;
}

export interface INinePay {
  entityId?: string;
  entityType?: ENTITY_TYPE;
  status?: STATUS;
  data?: any;
  createdAt?: Date;
}
