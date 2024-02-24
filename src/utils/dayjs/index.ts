import * as instance from 'dayjs';
import * as isLeapYear from 'dayjs/plugin/isLeapYear';
import * as localeData from 'dayjs/plugin/localeData';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';
import * as weekday from 'dayjs/plugin/weekday';
import * as isoWeek from 'dayjs/plugin/isoWeek';

instance.extend(localeData);
instance.extend(isLeapYear);
instance.extend(utc);
instance.extend(timezone);
instance.extend(weekday);
instance.extend(isoWeek);

instance.tz.setDefault('Etc/UCT');

export const dayjs = instance;
