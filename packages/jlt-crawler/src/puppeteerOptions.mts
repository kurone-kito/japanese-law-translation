import type { PuppeteerLaunchOptions } from 'puppeteer';
import { KnownDevices } from 'puppeteer';

const { viewport } = KnownDevices['iPad Mini landscape'];

/** default puppeteer options */
export const defaultOptions = {
  args: [
    '--disable-background-networking',
    '--disable-backgrounding-occluded-windows',
    '--disable-breakpad',
    '--disable-default-apps',
    '--disable-dev-shm-usage',
    '--disable-gpu',
    '--disable-hang-monitor',
    '--disable-infobars',
    '--disable-prompt-on-repost',
    '--disable-sync',
    '--no-sandbox',
    '--no-default-browser-check',
    '--no-zygote',
    '--start-maximized',
    `--window-size=${viewport.width},${viewport.height + 86}`,
  ],
  headless: 'shell',
  ignoreDefaultArgs: ['--disable-extensions'],
  acceptInsecureCerts: true,
  defaultViewport: viewport,
} as const satisfies PuppeteerLaunchOptions;

/**
 * create the puppeteer options
 * @param additional the additional puppeteer options
 * @returns the puppeteer options
 */
export const overrideOptions = (
  additional: PuppeteerLaunchOptions = {},
): PuppeteerLaunchOptions =>
  Object.freeze<PuppeteerLaunchOptions>({ ...defaultOptions, ...additional });
