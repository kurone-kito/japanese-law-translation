import { describe, expect, expectTypeOf, it } from 'vitest';
import { sortByKeys } from './sortByKeys.mjs';

describe('sortByKeys', () => {
  it('should sort an object by keys', () => {
    const object = { c: 1, a: 2, b: 3 };
    expect(JSON.stringify(object)).toBe('{"c":1,"a":2,"b":3}');
    const got = sortByKeys(object);
    expect(JSON.stringify(got)).toBe('{"a":2,"b":3,"c":1}');
  });

  it('should get the type of the returned object', () => {
    const object = { c: 1, a: 2, b: 3 } as const;
    const got = sortByKeys(object);
    expectTypeOf(got).toEqualTypeOf<typeof object>();
  });
});
