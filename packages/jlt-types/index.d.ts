/**
 * This package provides type definitions for the library package
 * {@link https://www.npmjs.com/package/@kurone-kito/japanese-law-translation | `@kurone-kito/japanese-law-translation`}
 *  which provides English translations of Japanese legal terms.
 *
 * @packageDocumentation
 */

/** Type definition for an entry in the dictionary. */
export interface EntryBase {
  /** The translations of the entry. */
  readonly translations: readonly Translation[];
}

/** Type definition for an example sentence in the dictionary. */
export interface Example {
  /** The English phrase of the example */
  readonly en: string;

  /** The Japanese phrase of the example */
  readonly ja: string;

  /** The reference to the source of the example. */
  readonly ref?: string | undefined;
}

/**
 * Type definition that the dictionary from English to Japanese.
 *
 * @template T The type of the keys in the dictionary.
 */
export type E2J<T extends string = string> = Readonly<
  Record<T, Least1<E2JEntry>>
>;

/**
 * Type definition for an entry in the dictionary from English to Japanese.
 */
export interface E2JEntry extends TranslationBase {
  /** The Hiragana of the entry. */
  readonly kana: string;

  /** The word of the entry. */
  readonly word: string;
}

/**
 * Type definition that the dictionary from Japanese to English.
 *
 * @template T The type of the keys in the dictionary.
 */
export type J2E<T extends string = string> = Readonly<Record<T, J2EEntry>>;

/**
 * Type definition for an entry in the dictionary from Japanese to English.
 */
export interface J2EEntry extends EntryBase {
  /** The Hiragana of the entry. */
  readonly kana: string;
}

/**
 * Type definition that the dictionary from Hiragana to English.
 *
 * @template T The type of the keys in the dictionary.
 */
export type K2E<T extends string = string> = Readonly<
  Record<T, Least1<K2EEntry>>
>;

/**
 * Type definition for an entry in the dictionary from Hiragana to English.
 */
export interface K2EEntry extends EntryBase {
  /** The Japanese word of the entry. */
  readonly word: string;
}

/**
 * The utility type that ensures that at least one element is present in
 * the array.
 *
 * @template T The type of the elements in the array.
 */
export type Least1<T> = readonly [T, ...(readonly T[])];

/** Type definition for a translation in the dictionary. */
export interface TranslationBase {
  /** The examples of the translation. */
  readonly examples: readonly Example[];

  /** The notes of the translation. */
  readonly notes: readonly string[];

  /** The usage of the translation. */
  readonly usage?: string | undefined;
}

/**
 * Type definition for a translation in the dictionary from Japanese to
 * English.
 */
export interface Translation extends TranslationBase {
  /** The phrase of the translation. */
  readonly phrase: string;
}
