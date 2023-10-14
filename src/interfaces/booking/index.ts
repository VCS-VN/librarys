import { STATUS } from '@/enum';
import { PAYMENT_RESOURCE, PAYMENT_TYPE, Status } from '@/model';
import { Observable } from 'rxjs';

export interface IBookingService {
  createBooking(data: ICreateBooking): Observable<IBooking>;
  updateBooking(data: IUpdateBooking): Observable<IBooking>;
}

export interface IBooking {
  id?: string;
  orderId?: string;
  amount?: number;
  paymentType?: PAYMENT_TYPE;
  userId?: string;
  storeId?: string;
  status?: STATUS;
}

export interface ICreateBooking extends IBooking {
  intentId?: string
}

export interface IUpdateBooking extends IBooking{}
