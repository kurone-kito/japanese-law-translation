import type {
  E2J,
  J2E,
  K2E,
} from '@kurone-kito/japanese-law-translation-types';
import { describe, expect, expectTypeOf, it } from 'vitest';
import { convertToE2J, convertToK2E } from './convert.mjs';

const j2e: J2E = {
  'word 1': {
    kana: 'かな 1',
    translations: [
      {
        phrase: 'phrase 1',
        examples: [
          { en: 'example 1', ja: '例 1' },
          { en: 'example 2', ja: '例 2' },
        ],
        notes: ['notes 1', 'notes 2'],
      },
    ],
  },
  'word 2': {
    kana: 'かな 2',
    translations: [{ phrase: 'phrase 2', examples: [], notes: [] }],
  },
  'word 3': { kana: 'かな 3', translations: [] },
};

describe('convertToE2J', () => {
  it('should convert a JSON object to an E2J object', () => {
    expect(convertToE2J(j2e)).toEqual({
      'phrase 1': [
        {
          kana: 'かな 1',
          word: 'word 1',
          examples: [
            { en: 'example 1', ja: '例 1' },
            { en: 'example 2', ja: '例 2' },
          ],
          notes: ['notes 1', 'notes 2'],
        },
      ],
      'phrase 2': [{ kana: 'かな 2', word: 'word 2', examples: [], notes: [] }],
    });
  });

  it('should get the type of the returned object', () =>
    expectTypeOf(convertToE2J(j2e)).toEqualTypeOf<E2J>());
});

describe('convertToK2E', () => {
  it('should convert a JSON object to a K2E object', () => {
    expect(convertToK2E(j2e)).toEqual({
      'かな 1': [
        {
          word: 'word 1',
          translations: [
            {
              phrase: 'phrase 1',
              examples: [
                { en: 'example 1', ja: '例 1' },
                { en: 'example 2', ja: '例 2' },
              ],
              notes: ['notes 1', 'notes 2'],
            },
          ],
        },
      ],
      'かな 2': [
        {
          word: 'word 2',
          translations: [{ phrase: 'phrase 2', examples: [], notes: [] }],
        },
      ],
      'かな 3': [{ word: 'word 3', translations: [] }],
    });
  });

  it('should get the type of the returned object', () =>
    expectTypeOf(convertToK2E(j2e)).toEqualTypeOf<K2E>());
});
