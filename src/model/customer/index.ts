import { STATUS } from '@/enum';
import { IStore } from '../store';

export interface ICustomer {
  id?: string;
  phoneNumber?: string;
  statusId?: STATUS;
  avatar?: string;
  stores?: IStore[];
  email?: string;
  name?: string;
  code?: string;
  stripeCustomerId?: string;
}

export interface IGetCustomerByPhoneNumber {
  customer: ICustomer;
  createIfNotExists?: boolean;
}

export interface ICustomerAddress {
  id?: string;
  name?: string;
  placeId?: string;
  lat?: number;
  long?: number;
  address?: string;
  customerId?: string;
}
