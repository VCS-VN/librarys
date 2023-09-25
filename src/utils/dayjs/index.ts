import * as dayjs from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear';
import * as localeData from 'dayjs/plugin/localeData';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';

dayjs().format();

dayjs.extend(localeData);
dayjs.extend(isLeapYear);
dayjs.extend(utc);
dayjs.extend(timezone);

dayjs.tz.setDefault('Etc/UCT');

export default dayjs;
