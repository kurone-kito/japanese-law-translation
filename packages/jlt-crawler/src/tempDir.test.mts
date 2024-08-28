import { rm, stat } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import { createTempDir } from './tempDir.mjs';

describe('createTempDir', () => {
  it('should create a temporary directory', async () => {
    const tempDir = await createTempDir();
    await expect(stat(tempDir)).resolves.toBeTruthy();
    await rm(tempDir, { recursive: true });
    expect(tempDir).toMatch(/jlt-crawler-\w{6}/);
  });
});
