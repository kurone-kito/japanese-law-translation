import type {
  Example,
  J2E,
  J2EEntry,
  Translation,
} from '@kurone-kito/japanese-law-translation-types';
import { describe, expect, expectTypeOf, it } from 'vitest';
import {
  convertEntry,
  convertExample,
  convertFromSource,
  convertTranslation,
} from './convertFromSource.mjs';
import type { Entry, Parsed } from './sourceTypes.mjs';

describe('convertEntry', () => {
  const source: Entry = {
    Word: {
      '#text': 'Word',
      '@_Kana': 'Kana',
    },
    Trans: [
      {
        Example: { EnPhrase: 'EN', JaPhrase: 'JA', Reference: 'Ref' },
        Note1: 'Note 1',
        Note2: 'Note 2',
        TransWord: 'Translation word',
        Usage: 'Usage',
      },
    ],
  };

  it('should convert an entry from the source to the destination', () => {
    expect(convertEntry(source)).toEqual([
      'Word',
      {
        kana: 'Kana',
        translations: [
          {
            examples: [{ en: 'EN', ja: 'JA', ref: 'Ref' }],
            notes: ['Note 1', 'Note 2'],
            phrase: 'Translation word',
            usage: 'Usage',
          },
        ],
      },
    ]);
  });

  it('should get the type of the returned object', () =>
    expectTypeOf(convertEntry(source)).toEqualTypeOf<
      readonly [word: string, entry: J2EEntry]
    >());
});

describe('convertExample', () => {
  const source = { EnPhrase: 'EN', JaPhrase: 'JA', Reference: 'Ref' };
  it('should convert an example from the source to the destination', () => {
    expect(convertExample(source)).toEqual({ en: 'EN', ja: 'JA', ref: 'Ref' });
  });

  it('should get the type of the returned object', () =>
    expectTypeOf(convertExample(source)).toEqualTypeOf<Example>());
});

describe('convertTranslation', () => {
  const source = {
    Example: { EnPhrase: 'EN', JaPhrase: 'JA', Reference: 'Ref' },
    Note1: 'Note 1',
    Note2: 'Note 2',
    TransWord: 'Translation word',
    Usage: 'Usage',
  };

  it('should convert a translation from the source to the destination', () => {
    expect(convertTranslation(source)).toEqual({
      examples: [{ en: 'EN', ja: 'JA', ref: 'Ref' }],
      notes: ['Note 1', 'Note 2'],
      phrase: 'Translation word',
      usage: 'Usage',
    });
  });

  it('should get the type of the returned object', () =>
    expectTypeOf(convertTranslation(source)).toEqualTypeOf<Translation>());
});

describe('convertFromSource', () => {
  const source: Parsed = {
    Dictionary: {
      Entry: [
        {
          Word: { '#text': 'Word', '@_Kana': 'Kana' },
          Trans: [
            {
              Example: { EnPhrase: 'EN', JaPhrase: 'JA', Reference: 'Ref' },
              Note1: 'Note 1',
              Note2: 'Note 2',
              TransWord: 'Translation word',
              Usage: 'Usage',
            },
          ],
        },
      ],
    },
  };

  it('should convert the dictionary from the source to the destination', () => {
    expect(convertFromSource(source)).toEqual({
      Word: {
        kana: 'Kana',
        translations: [
          {
            examples: [{ en: 'EN', ja: 'JA', ref: 'Ref' }],
            notes: ['Note 1', 'Note 2'],
            phrase: 'Translation word',
            usage: 'Usage',
          },
        ],
      },
    });
  });

  it('should get the type of the returned object', () =>
    expectTypeOf(convertFromSource(source)).toEqualTypeOf<J2E>());
});
