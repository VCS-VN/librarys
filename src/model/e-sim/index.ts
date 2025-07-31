import { E_SIM_STATUS, STATUS } from '@/enum';

export interface IESimOrder {
  code: string;
  orderCode: string;
  customerId: string;
  packageInfo: any;
  period: number;
  packageCode: string;
  thirdPartyOrderNo: string;
  thirdPartyTransactionId: string;
  price: number;
  status: STATUS;
  createdAt: Date;
}

export interface IESim {
  code: string;
  orderCode: string;
  period: number;
  packageCode: string;
  thirdPartySimNo: string;
  thirdPartyTransactionId: string;
  info: any;
  status: E_SIM_STATUS;
  totalVolume: number;
  totalDuration: number;
  remainedDuration: number;
  remainedVolume: number;
  usageVolume: number;
  expiredAt: Date;
  activeAt: Date;
  createdAt: Date;
}
