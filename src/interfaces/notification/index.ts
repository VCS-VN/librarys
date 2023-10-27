import { NOTIFICATION_TYPE } from '@/enum';
import { Observable } from 'rxjs';

export interface INotificationService {
  send(data: INotification): Observable<INotification>;
  push(data: IPusher): Observable<INotification>;
}

export interface INotification {
  id?: string;
  message?: string;
  phoneNumber?: string;
  type?: NOTIFICATION_TYPE;
}

export interface IPusher {
  channels?: string[];
  event?: string;
  message?: string;
}
