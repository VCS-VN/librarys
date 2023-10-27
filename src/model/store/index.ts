import { STATUS } from '@/enum';
import { IStoreMetadata } from '@/interfaces';
import { StripeSubscription } from '../stripe';

export class IUpdateStore {
  id?: string;
  name?: string;
  metadata?: IStoreMetadata;
  slug?: string;
  subscriptionId?: string;
  subscription?: StripeSubscription;
  status?: STATUS;
  email?: string;
  locationId?: string;
  placeId?: string;
  userId?: string;
  address?: string;
  baseURL?: string;
  lat?: number;
  long?: number;
  orderTypes: { name: string; code: string }[];
  priceId?: string;
}
