import { SHIPPING_PROVIDER, SHIPPING_STATUS } from '@/enum';

export interface IShipping {
  id: string;
  code: string;
  orderCode: number;
  status: SHIPPING_STATUS;
  provider: SHIPPING_PROVIDER;
  sender: any;
  receiver: any;
  rate: any;
  isPickedItems: boolean;
  shipment: any;
  shippingLabel: any;
  createdAt: Date;
}
