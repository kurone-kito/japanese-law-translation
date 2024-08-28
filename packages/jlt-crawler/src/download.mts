import ora from 'ora';
import type { Page } from 'puppeteer';
import puppeteer from 'puppeteer';
import { overrideOptions } from './puppeteerOptions.mjs';
import type { ParsedArguments } from './parseArguments.mjs';

/** Type definition that download options. */
export interface DownloadOptions
  extends Pick<Partial<ParsedArguments>, 'verbose' | 'version'> {
  /** The path to the directory where the downloaded file should be saved. */
  readonly downloadPath: string;
}

/** The URL of the download page. */
const url = 'https://www.japaneselawtranslation.go.jp/dicts/download';

/**
 * Initialize the browser and the page.
 * @param verbose If `true`, the headless mode is disabled.
 * @returns The browser and the page.
 */
const initialize = async (verbose?: boolean) => {
  const options = overrideOptions(verbose ? { headless: false } : {});
  const browser = await puppeteer.launch(options);
  const [page = await browser.newPage()] = await browser.pages();
  return [browser, page] as const;
};

/**
 * Fill the download form.
 * @param page The page object to fill the form.
 * @param version The version of the dictionary.
 */
const fillForm = async (page: Page, version?: string | undefined) => {
  if (version) {
    await page.waitForSelector('select#version');
    await page.select('select#version', version);
  }
  await page.waitForSelector('select#ftype');
  await page.select('select#ftype', '2');
};

/**
 * Download the file.
 * @param page The page object to download the file.
 * @param downloadPath The path to the directory where the downloaded file
 * should be saved.
 */
const internalDownload = async (page: Page, downloadPath: string) => {
  const cdp = await page.createCDPSession();
  const behavior = 'allow';
  const method = 'Browser.setDownloadBehavior';
  await cdp.send(method, { behavior, downloadPath, eventsEnabled: true });
  await new Promise<void>((resolve) => {
    cdp.on('Browser.downloadProgress', ({ state }) =>
      (state === 'inProgress' ? () => {} : resolve)(),
    );
    page.click('button');
  });
};

/**
 * Download the Japanese law translation dictionary.
 * @param option The download options.
 */
export const download = async (option: DownloadOptions) => {
  const { verbose, version, downloadPath } = option;
  const spinner = ora('Launching the browser').start();
  const [browser, page] = await initialize(verbose);
  await page.goto(url, { waitUntil: 'networkidle0' });
  spinner.succeed('Launched the browser.');
  await fillForm(page, version);
  spinner.succeed('Navigated to the download page.');
  await internalDownload(page, downloadPath);
  await page.close();
  await browser.close();
  spinner.succeed('Download completed.');
};
