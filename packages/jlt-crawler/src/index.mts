import { parseArguments, usage } from './parseArguments.mjs';

const { help, verbose, version } = parseArguments();
if (help) {
  console.warn(usage);
  process.exit(0);
}

console.log(verbose, version);
