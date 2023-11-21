export interface ICreateStripePayment {
  amount: number;
  currency?: string;
  description?: string;
  descriptor?: string;
  accountId: string;
}
