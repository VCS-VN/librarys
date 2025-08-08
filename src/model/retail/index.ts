import { RETAIL_ORDER_STATUS } from '@/enum';

export interface IRetail {
  code: string;
  orderCode: string;
  buyer: any;
  products: any[];
  status: RETAIL_ORDER_STATUS;
  retailer: any;
  shippingRateCode: string;
  minExpectedDate: Date;
  maxExpectedDate: Date;
  createdAt: Date;
  shippingRate: any;
  shipping: any;
  shippingQuote: any;
}
