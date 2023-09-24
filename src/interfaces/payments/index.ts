import { Observer } from 'rxjs';

export interface IPaymentService {
  add(payment: IPayment): Observer<IPayment>;
}

export interface IPayment {}
