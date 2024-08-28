import { fromStdin } from './fromStdin.mjs';

const body = await fromStdin();

console.log(body);
