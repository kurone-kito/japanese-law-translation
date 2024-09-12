import { Readable } from 'node:stream';
import { describe, expect, it, vi } from 'vitest';

import { fromStdin } from './fromStdin.mjs';

vi.mock('node:process', async (original) => ({
  ...(await original()),
  stdin: Readable.from('Hello, world!'),
}));

describe('fromStdin', () => {
  it('should read from stdin', () =>
    expect(fromStdin()).resolves.toBe('Hello, world!\n'));
});
