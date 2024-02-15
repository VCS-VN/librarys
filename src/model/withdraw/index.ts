import { STATUS, WITHDRAW_PROVIDER, WITHDRAW_RESOURCE } from '@/enum';

export interface ICreateWithdraw {
  amount: number;
  resource: WITHDRAW_RESOURCE;
  provider: WITHDRAW_PROVIDER;
  description?: string;
  withdrawInfoId: string;
}

export interface IWithdraw {
  id: string;
  amount: number;
  resource: WITHDRAW_RESOURCE;
  provider: WITHDRAW_PROVIDER;
  description?: string;
  withdrawInfoId: string;
  statusId: STATUS;
  cancelReason?: string;
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
}
