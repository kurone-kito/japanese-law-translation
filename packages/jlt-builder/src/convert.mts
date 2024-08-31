import type {
  E2J,
  E2JEntry,
  J2E,
  K2E,
  K2EEntry,
} from '@kurone-kito/japanese-law-translation-types';

/**
 * Convert the dictionary from English to Japanese to the dictionary from
 * Japanese to English.
 *
 * @param source The dictionary from Japanese to English.
 * @returns The dictionary from English to Japanese.
 */
export const convertToE2J = (source: J2E): E2J =>
  Object.entries(source).reduce<E2J>(
    (acc, [word, { kana, translations }]) =>
      translations.reduce((a, { phrase: p, ...rest }) => {
        const item: E2JEntry = { kana, word, ...rest };
        return p ? { ...a, [p]: a[p] ? [...a[p], item] : [item] } : a;
      }, acc),
    {},
  );

/**
 * Convert the dictionary from Japanese to English to the dictionary from
 * Hiragana to English.
 *
 * @param source The dictionary from Japanese to English.
 * @returns The dictionary from Hiragana to English.
 */
export const convertToK2E = (source: J2E): K2E =>
  Object.entries(source).reduce<K2E>((acc, [word, { kana, translations }]) => {
    const item: K2EEntry = { word, translations };
    return { ...acc, [kana]: acc[kana] ? [...acc[kana], item] : [item] };
  }, {});
