import { STATUS } from '@/enum';

export interface IBusinessType {
  id: number;
  name: string;
  code: string;
  statusId: STATUS;
}
