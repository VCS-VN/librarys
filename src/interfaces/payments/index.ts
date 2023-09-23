export interface IPaymentService {
  add(payment: IPayment): Promise<IPayment>;
}

export interface IPayment {}
