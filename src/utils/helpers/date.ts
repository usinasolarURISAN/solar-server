const handleSingleNumberFormat = (number: number): string =>
  number <= 9 ? `0${number}` : String(number);

const handleTimestampLengthConversion = (timestamp: string | number) =>
  String(timestamp).length === 10 ? `${timestamp}000` : timestamp;

const sanitizeTimestamp = (timestamp: string | number): number => {
  return Number(handleTimestampLengthConversion(timestamp));
};

export const timestampToLocalDate = (timestamp: number | string): string => {
  const timestampDate = new Date(sanitizeTimestamp(timestamp));

  const day = timestampDate.getDate();
  const month = handleSingleNumberFormat(timestampDate.getMonth() + 1);
  const year = timestampDate.getFullYear();

  return `${day}/${month}/${year}`;
};

export const timestampToLocalHour = (timestamp: number | string): string => {
  const timestampDate = new Date(sanitizeTimestamp(timestamp));

  const hour = handleSingleNumberFormat(timestampDate.getHours());
  const minute = handleSingleNumberFormat(timestampDate.getMinutes());

  return `${hour}:${minute}`;
};
