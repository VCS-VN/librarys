import { PAYMENT_TYPE, STATUS } from '@/enum';

export interface IBooking {
  id?: string;
  orderId?: string;
  amount?: number;
  paymentType?: PAYMENT_TYPE;
  userId?: string;
  storeId?: string;
  statusId?: STATUS;
}

export interface ICreateBooking extends IBooking {
  intentId?: string;
}

export interface IUpdateBooking extends IBooking {}
