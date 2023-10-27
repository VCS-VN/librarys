import { IUser } from '../user';
import { ICustomer } from '../customer';
import { IDENTITY_LOGIN_TYPE } from '@/enum';

export interface ILoginUsername {
  username: string;
  password: string;
  identityLogin: IDENTITY_LOGIN_TYPE;
}

export interface ILoginPhoneNumber {
  phoneNumber: string;
  identityLogin: IDENTITY_LOGIN_TYPE;
}

export interface ITokenResponse {
  accessToken?: string;
  refreshToken?: string;
  chatToken?: string;
  verified?: boolean;
}

export interface IIdentify {
  identify: string;
  otp?: string;
  identityLogin: IDENTITY_LOGIN_TYPE;
}

export interface IVerifyOTPResponse {
  verified: boolean;
}

export interface IIdentifyResponse extends IIdentify {}

export interface IVerifyToken extends ITokenResponse {
  identityLogin: IDENTITY_LOGIN_TYPE;
}

export interface IVerifyResponse {
  user: IUser;
  customer: ICustomer;
}
