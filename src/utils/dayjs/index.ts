import dayjs from 'dayjs';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import localeData from 'dayjs/plugin/localeData';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(localeData);
dayjs.extend(isLeapYear);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekday);
dayjs.extend(isoWeek);

dayjs.tz.setDefault('Etc/UCT');

export default dayjs;
