import { Status } from '@/model';
import { Observable } from 'rxjs';

export interface IPaymentService {
  add(payment: IPayment): Observable<IPayment>;
}

export interface IPayment {
  id?: string;
  userId: string;
  amount: number;
  countryId: number;
  description?: string;
  descriptor?: string;
  status: Status;
  resource: string;
}
