import { Observable } from 'rxjs';

export interface ICustomerService {
  getCustomerByPhone(data: IGetCustomerByPhoneNumber): Observable<ICustomer>;
  getCustomerById(data: ICustomer): Observable<ICustomer>;
}

export interface ICustomer {
  id?: string;
  phoneNumber?: string;
}

export interface IGetCustomerByPhoneNumber {
  customer: ICustomer;
  createIfNotExists?: boolean;
}
