import { FOOD_STATUS } from '@/enum';

export interface IFoodOrder {
  code: string;
  orderCode: string;
  products: any[];
  status: FOOD_STATUS;
  createdAt: Date;
}
