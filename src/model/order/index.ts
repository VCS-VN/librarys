import {
  ORDER_TYPE,
  PAYMENT_PROVIDER,
  PAYMENT_RESOURCE,
  PAYMENT_TYPE,
  STATUS,
} from '@/enum';
import { ICustomer, IFood, IRetail, IShipping, IStore, IESim } from '@/model';

export interface IOrder {
  _id?: string;
  customer?: ICustomer;
  status?: STATUS;
  transactionId?: string;
  paymentType?: PAYMENT_TYPE;
  type?: ORDER_TYPE;
  storeId?: string;
  storeSlug?: string;
  total?: number;
  net?: number;
  fees?: number;
  cancelReason?: string;
  createdAt?: Date;
  paidAt?: Date;
  note?: string;
  code?: string;
  vat?: number;
  cash?: number;
  table?: string;
  address?: string;
  resourceType?: string;
  refundStatus?: STATUS;
  cancelable?: boolean;
  paymentProvider?: PAYMENT_PROVIDER;
  retail?: Partial<IRetail>;
  eSim?: Partial<IESim>;
  food?: Partial<IFood>;
  shipping?: Partial<IShipping>;
}

export interface IInsertOrderHistory {
  orderCode?: string;
  status: STATUS;
  changedAt?: Date;
}

export interface IGetOrder extends IOrder {
  storeSlug?: string;
  storeId?: string;
  statusId?: number;
  fromDate?: Date;
  toDate?: Date;
  paymentType?: PAYMENT_TYPE;
  phoneNumber?: string;
  status?: STATUS;
  transactionId?: string;
}

export interface IGetOrders extends IGetOrder {
  page?: number;
  limit?: number;
}

export interface IUpdateOrder {
  code?: string;
  statusId?: number;
  paymentType?: string;
  note?: string;
}

export interface ITransaction {
  id?: string;
  userId?: string;
  transactionId?: string;
  amount?: number;
  net?: number;
  vat?: number;
  paymentType?: PAYMENT_TYPE;
  deliveryFees?: number;
  serviceFees?: number;
  paymentFees?: number;
  merchantFees?: number;
  pickupFees?: number;
  statusId?: STATUS;
  createdAt?: Date;
  updatedAt?: Date;
  paymentId?: string;
  store?: IStore;
  storeId?: string;
  resource?: PAYMENT_RESOURCE;
  currency?: string;
}
