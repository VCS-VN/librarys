import { STATUS } from '@/enum';

export interface IUser {
  id?: string;
  phoneNumber?: string;
  accountId?: string;
  customerId?: string;
  password?: string;
  statusId?: STATUS;
  username?: string;
  businessData?: IBusinessData;
}

export interface IBusinessData {
  doorDash: {
    id: string;
    displayName: string;
  };
}
