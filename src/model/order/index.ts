import { STATUS } from '@/enum';

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
