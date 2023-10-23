import { AVAILABLE_TIME_INTERVALS } from '../consts';
import { isOnlyNumbersAndLetters, isString } from './string';

/**
 * Validates a given param if is a valid interval.
 * @param interval
 * @returns
 */
export const validateTimeBasedInterval = (interval: string) => {
  if (!interval) return false;
  if (!isString(interval)) return false;
  if (!isOnlyNumbersAndLetters(interval)) return false;

  for (let index = 0; index < AVAILABLE_TIME_INTERVALS.length; index++) {
    const element = AVAILABLE_TIME_INTERVALS[index];

    if (element === interval) return true;
  }

  return false;
};
