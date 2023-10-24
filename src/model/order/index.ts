import { ICustomer, IProduct } from '@/interfaces';
import { Status } from '../base';
import { ORDER_TYPE, PAYMENT_TYPE, STATUS } from '@/enum';

export interface IOrder{
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
}

export interface IInsertOrderHistory {
  orderCode?: string;
  status: Status;
  changedAt?: Date;
}

export interface IGetOrders{
  storeId?: string;
  status?: number;
  fromDate?: Date;
  toDate?: Date;
  paymentType?: string;
  page?: number;
  limit?: number;
  phoneNumber?: string;
}