import { DELIVERY_PROVIDER, STATUS } from '@/enum';
import { IOrder } from '@/model';

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
  orders?: IOrder[];
  deliveryFee?: number;
  deliveryType?: string;
  deliveryProvider?: DELIVERY_PROVIDER;
  status?: STATUS;
  createdAt?: Date;
  deliveredAt?: Date;
}
