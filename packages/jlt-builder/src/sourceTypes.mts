/** Type definitions for the entry in the dictionary. */
export interface Entry {
  /** The translations of the entry. */
  readonly Trans: Trans | readonly Trans[];

  /** The word of the entry. */
  readonly Word: Word;
}

/** Type definition for an example sentence in the dictionary. */
export interface Example {
  /** The index of the example sentence. */
  readonly '@_Num'?: string;

  /** The English phrase of the example */
  readonly EnPhrase: string;

  /** The Japanese phrase of the example */
  readonly JaPhrase: string;

  /** The reference to the source of the example. */
  readonly Reference?: string | undefined;
}

/** Type definition for the parsed XML. */
export interface Parsed {
  /**
   * The XML declaration.
   *
   * This is always an empty string because the parser ignores XML
   * declarations.
   */
  readonly '?xml'?: '';

  /** The dictionary entries. */
  readonly Dictionary: {
    /** The entries in the dictionary. */
    readonly Entry: readonly Entry[];
  };
}

/** Type definition for a translation in the dictionary. */
export interface Trans {
  /** The index of the translation. */
  readonly '@_Num'?: string;

  /** The examples of the translation. */
  readonly Example?: Example | readonly Example[] | undefined;

  /** The notes of the translation. */
  readonly Note1?: string | undefined;

  /** The additional notes of the translation. */
  readonly Note2?: string | undefined;

  /** The translation of the word. */
  readonly TransWord: string;

  /** The usage of the translation. */
  readonly Usage?: string | undefined;
}

/** Type definition for a word in the dictionary. */
export interface Word {
  /** The word in Japanese. */
  readonly '#text': string;

  /** Kana reading of the word. */
  readonly '@_Kana': string;
}
