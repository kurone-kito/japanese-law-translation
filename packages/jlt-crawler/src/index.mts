import { parseArguments, usage } from './parseArguments.mjs';
import { download } from './download.mjs';

const { help, ...rest } = parseArguments();
if (help) {
  console.warn(usage);
  process.exit(0);
}

await download({ ...rest });
