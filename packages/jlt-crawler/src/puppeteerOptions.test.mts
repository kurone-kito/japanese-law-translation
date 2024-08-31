import type { PuppeteerLaunchOptions } from 'puppeteer';
import { describe, expect, expectTypeOf, it } from 'vitest';

import { defaultOptions, overrideOptions } from './puppeteerOptions.mjs';

describe('puppeteerOptions', () => {
  it('should have the default options', () => {
    expect(defaultOptions).toEqual({
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
        '--window-size=1024,854',
      ],
      headless: 'shell',
      ignoreDefaultArgs: ['--disable-extensions'],
      acceptInsecureCerts: true,
      defaultViewport: {
        deviceScaleFactor: 2,
        hasTouch: true,
        height: 768,
        isLandscape: true,
        isMobile: true,
        width: 1024,
      },
    });
  });

  it('should correctly type the default options', () =>
    expectTypeOf(defaultOptions).toMatchTypeOf<PuppeteerLaunchOptions>());
});

describe('overrideOptions', () => {
  it('should override the default options', () => {
    const options = overrideOptions({ headless: false });
    expect(options).toEqual({
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
        '--window-size=1024,854',
      ],
      headless: false,
      ignoreDefaultArgs: ['--disable-extensions'],
      acceptInsecureCerts: true,
      defaultViewport: {
        deviceScaleFactor: 2,
        hasTouch: true,
        height: 768,
        isLandscape: true,
        isMobile: true,
        width: 1024,
      },
    });
  });

  it('should correctly type the override options', () =>
    expectTypeOf(overrideOptions).toMatchTypeOf<
      (additional?: PuppeteerLaunchOptions) => PuppeteerLaunchOptions
    >());
});
