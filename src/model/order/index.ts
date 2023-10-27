import { Status } from '../base';

export interface IInsertOrderHistory {
  orderCode?: string;
  status: Status;
  changedAt?: Date;
}

export interface IGetOrder {
  storeId?: string;
  status?: number;
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
  status?: number;
  paymentType?: string;
  note?: string;
}
