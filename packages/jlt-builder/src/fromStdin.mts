import { stdin, stdout } from 'node:process';
import { createInterface } from 'node:readline/promises';

/**
 * Read from stdin
 * @returns The body of the input
 */
export const fromStdin = async (): Promise<string> => {
  const rl = createInterface({ input: stdin, output: stdout, terminal: false });
  let body = '';
  for await (const line of rl) {
    body += `${line}\n`;
  }
  rl.close();
  return body;
};
