import { Observable } from 'rxjs';

export interface ICustomerService {
  getCustomerByPhone(data: IGetCustomerByPhoneNumber): Observable<ICustomer>;
  getCustomerByID(data: ICustomer): Observable<ICustomer>;
}

export interface ICustomer {
  id?: string;
  phoneNumber?: string;
}

export interface IGetCustomerByPhoneNumber {
  customer: ICustomer;
  createIfNotExists?: boolean;
}
