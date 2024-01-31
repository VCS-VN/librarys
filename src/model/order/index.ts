import { ORDER_TYPE, PAYMENT_RESOURCE, PAYMENT_TYPE, STATUS } from '@/enum';
import { ICustomer, IProduct, IStore } from '@/model';

export interface IOrder {
  _id?: string;
  customerName?: string;
  customer?: ICustomer;
  products?: IProduct[];
  status?: STATUS;
  transactionId?: string;
  paymentType?: PAYMENT_TYPE;
  type?: ORDER_TYPE;
  storeId?: string;
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
  storeSlug?: string;
  delivery?: IDeliveryInfo;
  cancelable?: boolean;
}

export interface IInsertOrderHistory {
  orderCode?: string;
  status: STATUS;
  changedAt?: Date;
}

export interface IGetOrder {
  storeSlug?: string;
  storeId?: string;
  statusId?: number;
  fromDate?: Date;
  toDate?: Date;
  paymentType?: string;
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

export interface IDeliveryInfo {
  to?: string;
  phoneNumber?: string;
  address?: string;
  provider?: string;
  name?: string;
  tip?: number;
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
  resource?: PAYMENT_RESOURCE;
}
