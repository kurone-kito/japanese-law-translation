import { mkdtemp } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

/**
 * Create a temporary directory.
 * @returns The path to the created temporary directory.
 */
export const createTempDir = async (): Promise<string> => {
  const prefix = join(tmpdir(), 'jlt-crawler-');
  return await mkdtemp(prefix);
};
