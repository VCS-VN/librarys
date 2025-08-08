import { FOOD_ORDER_TYPE, FOOD_STATUS } from '@/enum';

export interface IFood {
  code: string;
  orderCode: string;
  type: FOOD_ORDER_TYPE;
  status: FOOD_STATUS;
  customer: any;
  products: any[];
  delivery: any;
  pickup: any;
  table: any;
  createdAt: Date;
}
