import { DELIVERY_PROVIDER, STATUS } from '@/enum';

export * from './door-dash';

export interface ICreateBusiness {
  externalBusinessId: string;
  name: string;
  description?: string;
  activationStatus?: string;
}

export interface IDeliveryLocation {
  lat?: number;
  lng?: number;
  address?: string;
  name?: string;
}

export interface IDelivery {
  from?: IDeliveryLocation;
  to?: IDeliveryLocation;
  orderCode?: string;
  fees?: number;
  type?: string;
  provider?: DELIVERY_PROVIDER;
  status?: STATUS;
  code?: string;
  createdAt?: Date;
  deliveredAt?: Date;
}
