
import { PAYMENT_RESOURCE, PAYMENT_TYPE } from '@/enum';
import { Status } from '@/model';
import { Observable } from 'rxjs';

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
  paymentId?: string;
  addedMoney?: boolean;
  fees?: number
  net?: number
}