import { STATUS } from '@/enum';

export interface ICountry {
  id: number;
  iso?: string;
  currency?: string;
  name: string;
  phoneCode: string;
  statusId: STATUS;
}
