import { XMLParser } from 'fast-xml-parser';
import { fromStdin } from './fromStdin.mjs';

const parser = new XMLParser({ ignoreAttributes: false });
const source = parser.parse(await fromStdin());

console.log(JSON.stringify(source));
