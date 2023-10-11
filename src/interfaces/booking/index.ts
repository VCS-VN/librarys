import { PAYMENT_RESOURCE, PAYMENT_TYPE, Status } from '@/model';
import { Observable } from 'rxjs';

export interface IBookingService {
  add(payment: IBooking): Observable<IBooking>;
  // getByPaymentId(payment: IBooking): Observable<IBooking>;
  // updatePayment(payment: IBooking): Observable<IBooking>;
}

export interface IBooking {
  id?: string;
  orderId?: string;
  amount?: number;
  paymentType?: PAYMENT_TYPE;
  provider?: string;
  intentId?: string;
  clientSecret?: string;
  userId?: string
}
