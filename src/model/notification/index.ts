import { NOTIFICATION_TYPE } from '@/enum';

export interface INotification {
  id?: string;
  message?: string;
  phoneNumber?: string;
  type?: NOTIFICATION_TYPE;
}

export interface IPusher {
  channels?: string[];
  event?: string;
  message?: any;
}

export interface IBotMessage {
  message?: any;
}
