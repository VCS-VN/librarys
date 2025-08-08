import { FOOD_ORDER_TYPE, FOOD_STATUS } from '@/enum';
import { IDelivery } from '../delivery';

export interface IFood {
  code: string;
  orderCode: string;
  type: FOOD_ORDER_TYPE;
  status: FOOD_STATUS;
  customer: any;
  products: any[];
  delivery: Partial<IDelivery>;
  pickup: any;
  table: any;
  createdAt: Date;
}
