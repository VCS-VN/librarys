import { LOG_TYPE } from '@/enum';

export interface ILog {
  title: string;
  data: any;
  type: LOG_TYPE;
}
