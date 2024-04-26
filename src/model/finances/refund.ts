import { PAYMENT_PROVIDER, REFUND_RESOURCE, REFUND_TYPE, STATUS } from '@/enum';

export interface IRefund {
  id?: string;
  statusId?: STATUS;
  currency?: string;
  amount?: number;
  transactionId?: string;
  refundType?: REFUND_TYPE;
  refundId?: string;
  paymentId?: string;
  paymentAttemptId?: string;
  intentId?: string;
  resource?: REFUND_RESOURCE;
  provider?: PAYMENT_PROVIDER;
}
