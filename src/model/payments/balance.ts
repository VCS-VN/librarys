import { ENTITY_TYPE, PAYMENT_PROVIDER, STATUS } from '@/enum';

export interface IHoldingBalance {
  id?: string;
  amount?: number;
  entityId?: string;
  entityType?: ENTITY_TYPE;
  resource?: PAYMENT_PROVIDER;
  paymentId?: string;
  transactionId?: string;
  statusId?: STATUS;
}
