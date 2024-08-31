import { readdir, readFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { parseArguments, usage } from './parseArguments.mjs';
import { createTempDir } from './tempDir.mjs';
import { download } from './download.mjs';

const { help, ...rest } = parseArguments();
if (help) {
  console.warn(usage);
  process.exit(0);
}

const downloadPath = await createTempDir();
await download({ ...rest, downloadPath });

const [file] = await readdir(downloadPath);
if (!file) {
  console.error('No file was downloaded.');
  process.exit(1);
}

const content = await readFile(join(downloadPath, file), 'utf-8');
await rm(downloadPath, { recursive: true });
console.log(content);
