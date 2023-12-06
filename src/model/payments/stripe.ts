export interface ICreateStripePayment {
  amount: number;
  fees: number;
  currency?: string;
  description?: string;
  descriptor?: string;
  accountId: string;
}
