export interface ICustomer {
  id?: string;
  phoneNumber?: string;
}

export interface IGetCustomerByPhoneNumber {
  customer: ICustomer;
  createIfNotExists?: boolean;
}
