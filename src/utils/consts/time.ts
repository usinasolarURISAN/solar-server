export const AVAILABLE_TIME_INTERVALS: TimeBasedIntervals[] = [
  '1D',
  '1W',
  '1M',
  '1Y',
  'ALL',
];

export const DEFAULT_SAVING_TIME_INTERVAL_MIN = 5;
export const TOTAL_REGISTERS_PER_HOUR = 60 / DEFAULT_SAVING_TIME_INTERVAL_MIN;
export const TOTAL_REGISTERS_PER_DAY = TOTAL_REGISTERS_PER_HOUR * 24;
export const TOTAL_REGISTERS_PER_WEEK = TOTAL_REGISTERS_PER_DAY * 7;
export const BASE_MONTH_DAYS_QUANTITY = 30;
export const TOTAL_REGISTERS_PER_MONTH =
  BASE_MONTH_DAYS_QUANTITY * TOTAL_REGISTERS_PER_DAY;
export const TOTAL_REGISTERS_PER_YEAR = TOTAL_REGISTERS_PER_MONTH * 12;

/**
 * This const will determine all metadata relationated to time intervals, but, for now,
 * we're only getting the number of registers per time interval. Futurely it could be
 * improved by adding more metadata like the interval time between the registers, for
 * example: 5min, 10min, 30min, 1h and so on...
 */
export const AVAILABLE_TIME_INTERVALS_METADATA: TimeBasedIntervalsGenericMapper<TimeBasedIntervalsMetaData> =
  {
    '1D': {
      granularityMinutes: '5',
      totalRegistersReturn: TOTAL_REGISTERS_PER_DAY,
    },
    '1M': {
      granularityMinutes: '30',
      totalRegistersReturn: TOTAL_REGISTERS_PER_MONTH,
    },
    '1W': {
      granularityMinutes: '10',
      totalRegistersReturn: TOTAL_REGISTERS_PER_WEEK,
    },
    '1Y': {
      granularityMinutes: '60',
      totalRegistersReturn: TOTAL_REGISTERS_PER_YEAR,
    },
    ALL: {
      granularityMinutes: '60',
      totalRegistersReturn: TOTAL_REGISTERS_PER_YEAR,
    },
  };
