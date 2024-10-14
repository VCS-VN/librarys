import { IDENTITY_LOGIN_TYPE, STATUS } from '@/enum';

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
  businessName?: string;
  source?: IDENTITY_LOGIN_TYPE;
}

export interface IBusinessData {
  doorDash?: {
    id?: string;
    displayName?: string;
  };
  name?: string;
  maxStores?: number;
}
