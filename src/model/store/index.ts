import { STATUS } from '@/enum';

export class IUpdateStore {
  id?: string;
  name?: string;
  placeId?: string;
  address?: string;
  long?: number;
  lat?: number;
  orderTypes: { name: string; code: string }[];
  status?: STATUS;
  priceId?: string;
  email?: string;
}
