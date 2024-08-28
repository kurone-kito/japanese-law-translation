import ora from 'ora';
import puppeteer from 'puppeteer';
import { overrideOptions } from './puppeteerOptions.mjs';
import type { ParsedArguments } from './parseArguments.mjs';

/** Type definition that download options. */
export interface DownloadOptions extends Pick<ParsedArguments, 'verbose'> {}

/** The URL of the download page. */
const url = 'https://example.com';

/**
 * Initialize the browser and the page.
 * @param verbose If `true`, the headless mode is disabled.
 * @returns The browser and the page.
 */
const initialize = async (verbose: boolean) => {
  const options = overrideOptions(verbose ? { headless: false } : {});
  const browser = await puppeteer.launch(options);
  const [page = await browser.newPage()] = await browser.pages();
  return [browser, page] as const;
};

/**
 * Download the Japanese law translation dictionary.
 * @param option The download options.
 */
export const download = async (option: DownloadOptions) => {
  const { verbose } = option;
  const spinner = ora('Launching the browser').start();
  const [browser, page] = await initialize(verbose);
  await page.goto(url, { waitUntil: 'networkidle0' });
  await new Promise((resolve) => setTimeout(resolve, 2000));
  await page.close();
  await browser.close();
  spinner.succeed('Succeeded to launch the browser');
};
