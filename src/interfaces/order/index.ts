import { ORDER_TYPE, PAYMENT_TYPE, STATUS } from "@/enum";
import { ICustomer } from "../customer";
import { IProduct } from "../product";

export interface IOrder {
  customerName?: string;
  customer?: ICustomer;
  products?: IProduct[];
  status?: STATUS;
  transactionId?: string;
  paymentType?: PAYMENT_TYPE;
  type?: ORDER_TYPE;
  storeId?: string;
  total?: number;
  net?: number;
  fees?: number;
  cancelReason?: string;
  createdAt?: Date;
  paidAt?: Date;
  note?: string;
  code?: string;
  vat?: number;
  cash?: number;
  table?: string;
  address: string;
  resourceType?: string;
  refundStatus?: STATUS;
}