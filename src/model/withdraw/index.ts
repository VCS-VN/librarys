import { STATUS, WITHDRAW_PROVIDER, WITHDRAW_RESOURCE } from '@/enum';

export interface ICreateWithdraw {
  amount: number;
  resource: WITHDRAW_RESOURCE;
  provider: WITHDRAW_PROVIDER;
  description?: string;
  withdrawInfoId: string;
}

export interface IWithdraw {
  id?: string;
  code?: string;
  amount?: number;
  resource?: WITHDRAW_RESOURCE;
  provider?: WITHDRAW_PROVIDER;
  description?: string;
  withdrawInfoId?: string;
  statusId?: STATUS;
  cancelReason?: string;
  requestId?: string;
  histories?: IWithdrawHistory[];
}

export interface IWithdrawInfo {
  id?: string;
  name?: string;
  bankName?: string;
  currency?: string;
  accountName?: string;
  accountNumber?: string;
  routingType?: string;
  routingCode?: string;
  countryCode?: string;
  state?: string;
  city?: string;
  address?: string;
  postCode?: string;
  entityId?: string;
  entityType?: string;
  statusId?: STATUS;
  isDefault?: boolean;
}

export interface IWithdrawHistory {
  withdrawCode?: string;
  status?: STATUS;
  changedAt?: Date;
  createdAt?: Date;
}
