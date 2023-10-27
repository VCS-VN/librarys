import { PAYMENT_TYPE, STATUS } from '@/enum';
import { Observable } from 'rxjs';

export interface IBookingService {
  createBooking(data: ICreateBooking): Observable<IBooking>;
  updateBooking(data: IUpdateBooking): Observable<IBooking>;
  getByIntentId(data: ICreateBooking): Observable<IBooking>;
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
  intentId?: string;
}

export interface IUpdateBooking extends IBooking {}
