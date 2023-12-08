import { DELIVERY_PROVIDER, STATUS } from '@/enum';

export * from './door-dash';

export interface ICreateBusiness {
  externalBusinessId: string;
  name: string;
  description?: string;
  activationStatus?: string;
}

export interface IDeliveryContact {
  lat?: number;
  lng?: number;
  address?: string;
  name?: string;
  phoneNumber?: string;
}

export interface IDelivery {
  from?: IDeliveryContact;
  to?: IDeliveryContact;
  orderCode?: string;
  fees?: number;
  type?: string;
  provider?: DELIVERY_PROVIDER;
  status?: STATUS;
  code?: string;
  createdAt?: Date;
  deliveredAt?: Date;
  tip?: number;
  storeId?: string;
  metadata?: any;
  cancelReason?: string;
  prepareTime?: number;
  driver?: string;
  driverPhoneNumber?: string;
  driverId?: string
}
