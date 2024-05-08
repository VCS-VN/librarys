import { STATUS } from '@/enum';

export interface IUser {
  id?: string;
  phoneNumber?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  accountId?: string;
  password?: string;
  statusId?: STATUS;
  username?: string;
  businessData?: IBusinessData;
  identityVerificationStatus?: STATUS;
  countryId?: number;
  avatar?: string;
}

export interface IBusinessData {
  doorDash?: {
    id?: string;
    displayName?: string;
  };
  name?: string;
  maxStores?: number;
}
