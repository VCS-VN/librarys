import { Observable } from 'rxjs';

export interface ICustomerService {
  GetCustomerByPhone(data: IGetCustomerByPhoneNumber): Observable<ICustomer>;
}

export interface ICustomer {
  id?: string;
  phoneNumber?: string;
}

export interface IGetCustomerByPhoneNumber {
  customer: ICustomer;
  createIfNotExists?: boolean;
}
