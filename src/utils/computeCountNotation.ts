export const computeCountNotaion = (count: number) => {
  const THOUSANDS = 1000;
  const MILLIONS = 1000000;

  if (count > MILLIONS) {
    return (count / MILLIONS).toFixed(1) + 'M';
  }

  if (count > THOUSANDS) {
    return (count / THOUSANDS).toFixed(1) + 'K';
  }

  return `${count}`;
};
