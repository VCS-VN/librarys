import { Observable } from 'rxjs';

export interface IUserService {
  getUserByAccountId(data: IUser): Observable<IUser>;
}

export interface IUser {
  id?: string;
  phoneNumber?: string;
  accountId?: string;
  customerId?: string;
}
