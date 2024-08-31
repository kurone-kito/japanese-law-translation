import { describe, expect, expectTypeOf, it } from 'vitest';
import { parseArguments } from './parseArguments.mjs';

describe('parseArguments', () => {
  const baseArgs = ['node', 'jlt-crawler'] as const;

  it('should parse the arguments', () =>
    expect(parseArguments()).toEqual({ help: false, verbose: false }));

  it('should correctly type the return value', () =>
    expectTypeOf(parseArguments()).toEqualTypeOf<{
      readonly help: boolean;
      readonly verbose: boolean;
      readonly version?: string | undefined;
    }>());

  it('should parse the arguments with help', () => {
    process.argv = [...baseArgs, '-h'];
    expect(parseArguments()).toEqual({ help: true, verbose: false });
  });

  it('should parse the arguments with verbose', () => {
    process.argv = [...baseArgs, '-v'];
    expect(parseArguments()).toEqual({ help: false, verbose: true });
  });

  it('should parse the arguments with version', () => {
    process.argv = [...baseArgs, '1.0.0'];
    expect(parseArguments()).toEqual({
      help: false,
      verbose: false,
      version: '1.0.0',
    });
  });

  it('should parse the arguments with multiple options', () => {
    process.argv = [...baseArgs, '-h', '-v', '1.0.0'];
    expect(parseArguments()).toEqual({
      help: true,
      verbose: true,
      version: '1.0.0',
    });
  });
});
