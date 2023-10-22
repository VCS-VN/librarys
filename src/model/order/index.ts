import { Status } from '../base';

export interface IInsertOrderHistory {
  orderCode?: string;
  status: Status;
  changedAt?: Date;
}
