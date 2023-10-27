import { IPayment } from '@/interfaces';

export * from './air-wallex.wh'

export interface ICreatePayment extends IPayment {
  intentId?: string;
  clientSecret?: string;
}
