import { PAYMENT_RESOURCE, PAYMENT_TYPE, Status } from '@/model';
import { Observable } from 'rxjs';

export interface IPaymentService {
  add(payment: IPayment): Observable<ICreatePayment>;
  getByPaymentId(payment: IPayment): Observable<IPayment>;
}

export interface IPayment {
  id?: string;
  userId?: string;
  amount?: number;
  countryId?: number;
  description?: string;
  descriptor?: string;
  status?: Status;
  resource?: PAYMENT_RESOURCE;
  provider?: string;
  type?: string;
  currency?: string;
  paymentType?: PAYMENT_TYPE;
}

export interface ICreatePayment extends IPayment {
  intentId?: string;
  clientSecret?: string;
}
