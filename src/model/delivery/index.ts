import { DELIVERY_PROVIDER, STATUS } from '@/enum';

export * from './door-dash';

export interface ICreateBusiness {
  externalBusinessId: string;
  name: string;
  description?: string;
  activationStatus?: string;
}

export interface IDeliveryInfo {
  to?: string;
  phoneNumber?: string;
  address?: string;
  provider?: string;
  name?: string;
  tip?: number;
  email?: string;
  placeId?: string;
  lat?: number;
  lng?: number;
}

export interface IDriverInfo {
  id?: string;
  name?: string;
  phoneNumber?: string;
  rating?: string;
  image?: string;
  location?: {
    lat?: number;
    lng?: number;
  };
  email?: string;
  vehicle?: {
    color?: string;
    brand?: string;
    model?: string;
    type?: string;
  };
}

export interface IDelivery {
  from?: IDeliveryInfo;
  to?: IDeliveryInfo;
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
  driverId?: string;
  recreateCount?: number;
  placeId?: string;
  requestId?: string;
  driverInfo?: IDriverInfo;
}

export interface IDeliveryHistory {
  deliveryCode?: string;
  status?: STATUS;
  changedAt?: Date;
  createdAt?: Date;
  metadata?: any;
}
