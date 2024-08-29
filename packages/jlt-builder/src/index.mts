import { XMLParser } from 'fast-xml-parser';
import { convertToE2J, convertToK2E } from './convert.mjs';
import { convertFromSource } from './convertFromSource.mjs';
import { fromStdin } from './fromStdin.mjs';
import { sortByKeys } from './sortByKeys.mjs';

const parser = new XMLParser({ ignoreAttributes: false });
const j2e = sortByKeys(convertFromSource(parser.parse(await fromStdin())));
const e2j = sortByKeys(convertToE2J(j2e));
const k2e = sortByKeys(convertToK2E(j2e));

console.log(JSON.stringify(j2e, null, 2));
console.log(JSON.stringify(e2j, null, 2));
console.log(JSON.stringify(k2e, null, 2));
