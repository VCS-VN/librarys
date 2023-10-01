import { Observable } from 'rxjs';

export interface INotificationService {
  send(data: INotification): Observable<INotification>;
}

export interface INotification {
  id?: string;
  message?: string;
  phoneNumber?: string;
  type?: string;
}
