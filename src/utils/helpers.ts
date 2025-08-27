export function groupInPairs<T>(values: T[]): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < values.length; i += 2) {
    result.push(values.slice(i, i + 2));
  }
  return result;
}
