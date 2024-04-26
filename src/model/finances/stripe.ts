import { PAYMENT_TYPE } from '@/enum';

export interface ICreateStripePayment {
  amount: number;
  fees: number;
  currency?: string;
  description?: string;
  descriptor?: string;
  accountId: string;
  paymentType?: PAYMENT_TYPE;
  customerId?: string;
}
