import { PAYMENT_PROVIDER, REFUND_RESOURCE, REFUND_TYPE } from '@/enum';

export interface IRefund {
  id?: string;
  statusId?: string;
  currency?: string;
  amount?: number;
  transactionId?: string;
  refundType?: REFUND_TYPE;
  refundId?: string;
  paymentId?: string;
  paymentAttemptId?: string;
  resource?: REFUND_RESOURCE;
  provider?: PAYMENT_PROVIDER;
}
