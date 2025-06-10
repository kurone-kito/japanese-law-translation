import { readFile, readdir, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { isNativeError } from 'node:util/types';
import { download } from './download.mjs';
import { parseArguments, usage } from './parseArguments.mjs';
import { createTempDir } from './tempDir.mjs';

const { help, ...rest } = parseArguments();
if (help) {
  console.warn(usage);
  process.exit(0);
}

const downloadPath = await createTempDir();
try {
  await download({ ...rest, downloadPath });
  const [file] = await readdir(downloadPath);
  if (!file) {
    throw new Error('No file was downloaded.');
  }
  console.log(await readFile(join(downloadPath, file), 'utf-8'));
} catch (error) {
  console.error(isNativeError(error) ? error.message : String(error));
  process.exitCode = 1;
} finally {
  await rm(downloadPath, { recursive: true });
}
