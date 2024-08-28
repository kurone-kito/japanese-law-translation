import { XMLParser } from 'fast-xml-parser';
import { fromStdin } from './fromStdin.mjs';
import type { Parsed } from './sourceTypes.mjs';

const parser = new XMLParser({ ignoreAttributes: false });
const source: Parsed = parser.parse(await fromStdin());

console.log(JSON.stringify(source));
