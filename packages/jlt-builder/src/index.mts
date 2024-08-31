import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { XMLParser } from 'fast-xml-parser';
import { convertToE2J, convertToK2E } from './convert.mjs';
import { convertFromSource } from './convertFromSource.mjs';
import { fromStdin } from './fromStdin.mjs';
import { sortByKeys } from './sortByKeys.mjs';

const parser = new XMLParser({ ignoreAttributes: false });
const j2e = sortByKeys(convertFromSource(parser.parse(await fromStdin())));
const e2j = sortByKeys(convertToE2J(j2e));
const k2e = sortByKeys(convertToK2E(j2e));

const dist = join(process.cwd(), 'src');
await mkdir(dist, { recursive: true });
await writeFile(join(dist, 'j2e.json'), JSON.stringify(j2e, null, 2));
await writeFile(join(dist, 'e2j.json'), JSON.stringify(e2j, null, 2));
await writeFile(join(dist, 'k2e.json'), JSON.stringify(k2e, null, 2));
