import type {
  Example,
  J2E,
  J2EEntry,
  Translation,
} from '@kurone-kito/japanese-law-translation-types';
import type {
  Entry,
  Example as SrcExample,
  Trans,
  Parsed,
} from './sourceTypes.mjs';

/** The alias of the `Array.isArray` function. */
const isArray = Array.isArray as <T>(v: T | readonly T[]) => v is readonly T[];

/**
 * Convert an example from the source to the destination.
 * @param source The example from the source.
 * @returns The example in the destination.
 */
export const convertExample = (source: SrcExample): Example => {
  const { EnPhrase: en, JaPhrase: ja, Reference: ref } = source;
  return { en, ja, ref };
};

/**
 * Convert a translation from the source to the destination.
 * @param source The translation from the source.
 * @returns The translation in the destination.
 */
export const convertTranslation = (source: Trans): Translation => {
  const {
    Example: examples = [],
    Note1: note1,
    Note2: note2,
    TransWord: phrase,
    Usage: usage,
  } = source;
  const exArray = isArray(examples) ? examples : [examples];
  return {
    examples: exArray.map(convertExample) ?? [],
    notes: [note1, note2].filter((n): n is string => n !== undefined),
    phrase,
    usage,
  };
};

/**
 * Convert an entry from the source to the destination.
 * @param source The entry from the source.
 * @returns The entry in the destination.
 */
export const convertEntry = (
  source: Entry,
): readonly [word: string, entry: J2EEntry] => {
  const {
    Trans: trSrc,
    Word: { '#text': word, '@_Kana': kana },
  } = source;
  const transArray = isArray(trSrc) ? trSrc : [trSrc];
  return [word, { kana, translations: transArray.map(convertTranslation) }];
};

/**
 * Convert the dictionary from the source to the destination.
 * @param source The dictionary from the source.
 * @returns The dictionary in the destination.
 */
export const convertFromSource = (source: Parsed): J2E => {
  const { Dictionary: dictionary } = source;
  return Object.fromEntries(dictionary.Entry.map(convertEntry));
};
