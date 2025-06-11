import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

// biome-ignore lint/style/noVar: Variables are hoisted for vitest mocks
var spinner: Record<'start' | 'stop' | 'succeed', ReturnType<typeof vi.fn>>;
// biome-ignore lint/style/noVar: Variables are hoisted for vitest mocks
var oraMock: ReturnType<typeof vi.fn>;
vi.mock('ora', () => {
  spinner = {
    start: vi.fn().mockReturnThis(),
    stop: vi.fn(),
    succeed: vi.fn(),
  };
  oraMock = vi.fn(() => spinner);
  return { default: oraMock };
});

// biome-ignore lint/style/noVar: Variables are hoisted for vitest mocks
var launchMock: ReturnType<typeof vi.fn>;
vi.mock('puppeteer', () => {
  launchMock = vi.fn();
  return {
    default: { launch: launchMock },
    KnownDevices: { 'iPad Mini landscape': { viewport: {} } },
  };
});

import { download } from './download.mjs';

describe('download', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    oraMock.mockReturnValue(spinner);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should throw when browser launch fails', async () => {
    launchMock.mockRejectedValue(new Error('launch error'));
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    await expect(download({ downloadPath: '/tmp' })).rejects.toThrow(
      'launch error',
    );
    expect(spinner.succeed).not.toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith('launch error');
  });

  it('should throw when download fails', async () => {
    const cdp = {
      send: vi.fn().mockRejectedValue(new Error('download error')),
      on: vi.fn(),
    };
    const page = {
      goto: vi.fn().mockResolvedValue(undefined),
      waitForSelector: vi.fn().mockResolvedValue(undefined),
      select: vi.fn().mockResolvedValue(undefined),
      createCDPSession: vi.fn().mockResolvedValue(cdp),
      click: vi.fn(),
      close: vi.fn().mockResolvedValue(undefined),
    };
    const browser = {
      pages: vi.fn().mockResolvedValue([page]),
      newPage: vi.fn().mockResolvedValue(page),
      close: vi.fn().mockResolvedValue(undefined),
    };
    launchMock.mockResolvedValue(browser);
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    await expect(download({ downloadPath: '/tmp' })).rejects.toThrow(
      'download error',
    );
    expect(spinner.stop).toHaveBeenCalled();
    expect(errorSpy).toHaveBeenCalledWith('download error');
  });
});
