import { Status } from '@/model';
import { Observable } from 'rxjs';

export interface IPaymentService {
  add(payment: IPayment): Observable<ICreatePayment>;
}

export interface IPayment {
  id?: string;
  userId?: string;
  amount?: number;
  countryId?: number;
  description?: string;
  descriptor?: string;
  status?: Status;
  resource?: string;
  provider?: string;
  type?: string;
}

export interface ICreatePayment extends IPayment {
  intentId?: string
}
