/**
 * Sort the keys of the object.
 * @param source The object to sort the keys.
 * @returns The object with the keys sorted.
 */
export const sortByKeys = <T extends object>(source: T): T => {
  const entries = Object.entries(source).sort(([a], [b]) => a.localeCompare(b));
  return Object.fromEntries(entries) as T;
};
