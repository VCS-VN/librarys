import instance = require('dayjs');
import isLeapYear = require('dayjs/plugin/isLeapYear');
import localeData = require('dayjs/plugin/localeData');
import utc = require('dayjs/plugin/utc');
import timezone = require('dayjs/plugin/timezone');
import weekday = require('dayjs/plugin/weekday');
import isoWeek = require('dayjs/plugin/isoWeek');

instance.extend(localeData);
instance.extend(isLeapYear);
instance.extend(utc);
instance.extend(timezone);
instance.extend(weekday);
instance.extend(isoWeek);

instance.tz.setDefault('Etc/UCT');

export const dayjs = instance.tz;
