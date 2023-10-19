import { IDENTITY_LOGIN_TYPE } from '@/model/auth';
import { Observable } from 'rxjs';

export interface IAuthService {
  loginCustomerByUsername(data: ILoginUsername): Observable<ITokenResponse>;
  loginCustomerByPhoneNumber(
    data: ILoginPhoneNumber,
  ): Observable<IIdentifyResponse>;
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
}

export interface IIdentifyResponse {
  identify: string;
  otp?: string;
}
