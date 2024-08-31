import type {
  E2J as TypeE2J,
  J2E as TypeJ2E,
  K2E as TypeK2E,
} from '@kurone-kito/japanese-law-translation-types';
import e2jJson from './e2j.json' with { type: 'json' };
import j2eJson from './j2e.json' with { type: 'json' };
import k2eJson from './k2e.json' with { type: 'json' };

export type {
  Example,
  E2JEntry,
  J2EEntry,
  K2EEntry,
  Translation,
} from '@kurone-kito/japanese-law-translation-types';

/** Type definition that keys in the dictionary from English to Japanese. */
export type E2JKeys = keyof typeof e2jJson;

/** Type definition that the dictionary from Japanese to English. */
export type E2J = TypeE2J<E2JKeys>;

/** Type definition that keys in the dictionary from Japanese to English. */
export type J2EKeys = keyof typeof j2eJson;

/** Type definition that the dictionary from Japanese to English. */
export type J2E = TypeJ2E<J2EKeys>;

/** Type definition that keys in the dictionary from Hiragana to English. */
export type K2EKeys = keyof typeof k2eJson;

/** Type definition that the dictionary from Hiragana to English. */
export type K2E = TypeK2E<K2EKeys>;

/** The dictionary from English to Japanese. */
export const e2j = e2jJson as unknown as E2J;

/** The dictionary from Japanese to English. */
export const j2e = j2eJson as unknown as J2E;

/** The dictionary from Hiragana to English. */
export const k2e = k2eJson as unknown as K2E;
