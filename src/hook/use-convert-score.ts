export function useConvertScore(value: number): string {
  if (value >= 1000) {
    const formattedValue = (value / 1000).toFixed(1);
    return `${formattedValue} K`;
  }
  return value.toString();
}
