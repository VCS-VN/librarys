import { STATUS } from '@/enum';
import { PAYMENT_RESOURCE, PAYMENT_TYPE, Status } from '@/model';
import { Observable } from 'rxjs';

export interface IBookingService {
  createBooking(payment: ICreateBooking): Observable<IBooking>;
  // getByPaymentId(payment: IBooking): Observable<IBooking>;
  // updatePayment(payment: IBooking): Observable<IBooking>;
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

export interface ICreateBooking extends IBooking {}
