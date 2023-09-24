import { Observable } from 'rxjs';

export interface IPaymentService {
  add(payment: IPayment): Observable<IPayment>;
}

export interface IPayment {}
