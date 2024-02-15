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
