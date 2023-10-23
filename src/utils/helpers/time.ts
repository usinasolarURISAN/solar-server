/**
 * Use to check if a register timestamp is allowed in the given granularity.
 */
export const granularityChecker = (
  timestamp: number,
  granularityFactorMinute: AvailableGranularityMinutes
) => {
  const castedGranularityFactorMinute = Number(granularityFactorMinute);
  const currentMinute = new Date(timestamp).getMinutes();

  return currentMinute % castedGranularityFactorMinute === 0;
};
