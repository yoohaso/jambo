import { formatDateWithDots } from './formatDateWithDots';

export const computeDateNotation = (timestamp: number) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diffSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const ONE_MINUTE = 60;
  const ONE_HOUR = 3600;
  const ONE_DAY = 86400;
  const ONE_YEAR = 31536000;

  if (diffSeconds < ONE_MINUTE) {
    return 'Now';
  } else if (diffSeconds >= ONE_MINUTE && diffSeconds < ONE_HOUR) {
    return `${Math.floor(diffSeconds / ONE_MINUTE)}min ago`;
  } else if (diffSeconds >= ONE_HOUR && diffSeconds < ONE_DAY) {
    return `${Math.floor(diffSeconds / ONE_HOUR)}h ago`;
  } else if (diffSeconds >= ONE_DAY && diffSeconds < ONE_YEAR) {
    return formatDateWithDots(timestamp, 'mm.dd');
  } else {
    return formatDateWithDots(timestamp, 'yyyy.mm.dd');
  }
};
