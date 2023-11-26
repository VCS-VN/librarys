import { ORDER_TYPE, PAYMENT_TYPE, STATUS } from '@/enum';
import { ICustomer, IProduct } from '@/model';

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
  address: string;
  resourceType?: string;
  refundStatus?: STATUS;
  storeSlug: string;
}

export interface IInsertOrderHistory {
  orderCode?: string;
  statusId: STATUS;
  changedAt?: Date;
}

export interface IGetOrder {
  storeId?: string;
  statusId?: number;
  fromDate?: Date;
  toDate?: Date;
  paymentType?: string;
  phoneNumber?: string;
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
