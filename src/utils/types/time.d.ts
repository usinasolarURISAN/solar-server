/**
 * Available intervals accepted to make a query.
 * 1D: 1 day
 * 1W: 1 week
 * 1M: 1 month
 * 1Y: 1 year
 * ALL: all time
 */
declare type TimeBasedIntervals = '1D' | '1W' | '1M' | '1Y' | 'ALL';

declare type TimeBasedIntervalsGenericMapper<T = number> = {
  [time in TimeBasedIntervals]: T;
};

declare type AvailableGranularityMinutes =
  | '5'
  | '10'
  | '15'
  | '20'
  | '30'
  | '60';
declare type AvailableGranularityHours = '1';

declare type TimeBasedIntervalsMetaData = {
  granularityMinutes: AvailableGranularityMinutes;
  totalRegistersReturn: number;
};
