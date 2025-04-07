export const formatDateWithDots = (timestamp: number, formatStr: 'yyyy.mm.dd' | 'mm.dd') => {
  const dateObj = new Date(timestamp);
  const hasYearFormat = formatStr.startsWith('yyyy');

  const year = hasYearFormat ? dateObj.getFullYear().toString() : undefined;
  const month = (dateObj.getMonth() + 1).toString().padStart(2, '0');
  const day = dateObj.getDate().toString().padStart(2, '0');

  if (hasYearFormat) {
    return `${year}.${month}.${day}`;
  }

  return `${month}.${day}`;
};
