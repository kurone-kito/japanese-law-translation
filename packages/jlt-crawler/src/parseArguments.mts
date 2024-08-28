import { parseArgs } from 'node:util';
import chalk from 'chalk';

/** type definition that represents the parsed arguments */
export interface ParsedArguments {
  /**
   * If `true`, the help message should be displayed.
   *
   * @default false
   */
  readonly help: boolean;

  /**
   * If `true`, disable the headless mode.
   *
   * @default false
   */
  readonly verbose: boolean;

  /**
   * The version number you wish to fetch.
   *
   * If omitted, the latest version is assumed to be specified.
   */
  readonly version?: string | undefined;
}

/** The usage message that should be displayed when the user requests help. */
export const usage = `${chalk.bold('jlt-crawler [options] [<version>]')}

${chalk.underline('Arguments')}:
  ${chalk.bold('<version>')}      The version number you wish to fetch.
                 Default: the latest version is assumed to be specified.

${chalk.underline('Options')}:
  ${chalk.bold('-h, --help')}     Show this help message.
  ${chalk.bold('-v, --verbose')}  Disable the headless mode.`;

/**
 * Parses the command-line arguments and returns the result.
 * @returns The parsed arguments.
 */
export const parseArguments = (): ParsedArguments => {
  const { positionals, values } = parseArgs({
    allowPositionals: true,
    options: {
      help: { type: 'boolean', short: 'h' },
      verbose: { type: 'boolean', short: 'v' },
    },
  });
  const [version] = positionals;
  const { help = false, verbose = false } = values;
  return { version, help, verbose };
};
