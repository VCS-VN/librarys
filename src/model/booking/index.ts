import { PAYMENT_RESOURCE, PAYMENT_TYPE, STATUS } from '@/enum';

export interface IBooking {
  id?: string;
  orderId?: string;
  amount?: number;
  paymentFees: number;
  paymentType?: PAYMENT_TYPE;
  userId?: string;
  storeId?: string;
  statusId?: STATUS;
  paymentId?: string;
  resource?: PAYMENT_RESOURCE;
  startedAt?: Date;
  endedAt?: Date;
  createdAt?: Date;
}

export interface ICreateBooking extends IBooking {
  intentId?: string;
}

export interface IUpdateBooking extends IBooking {}
