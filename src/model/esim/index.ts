import { STATUS } from '@/enum';

export interface IESim {
  id?: string;
  code?: string;
  status?: STATUS;
  price?: number;
  userId?: string;
  packageCode?: string;
  eSimOrderNo?: string;
  data?: any;
}
