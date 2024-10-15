export function randomIntegerBetween(lo: number, hi: number): number {
  const interval = hi - lo;

  return Math.floor(Math.random() * interval) + lo;
}
