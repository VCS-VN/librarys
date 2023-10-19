import { IDENTITY_LOGIN_TYPE } from '@/model/auth';
import { Observable } from 'rxjs';

export interface IAuthService {
  loginByUsername(data: ILoginUsername): Observable<ITokenResponse>;
  loginByPhoneNumber(data: ILoginPhoneNumber): Observable<IIdentifyResponse>;
  verifyOtp(data: IIdentify): Observable<ITokenResponse>;
}

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
  accessToken: string;
  refreshToken: string;
  chatToken: string;
  verified: boolean;
}

export interface IIdentify {
  identify: string;
  otp?: string;
  identityLogin: IDENTITY_LOGIN_TYPE;
}

export interface IIdentifyResponse extends IIdentify {}
