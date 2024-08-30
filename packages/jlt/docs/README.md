**@kurone-kito/japanese-law-translation** • [**Docs**](globals.md)

***

# ↔️ Japanese Law Translation

The unofficial library provides bilingual English translations of legal
terms in Japan.

- source: <https://www.japaneselawtranslation.go.jp/>
- see: [My tweet](https://x.com/kurone_kito/status/1817756249112617423)

## Pros

- This library provides dictionaries in JSON format, which is easier to
  handle than XML or CSV distributed on the official website.
- Since this library is available via [npm](https://www.npmjs.com), it can
  be used more quickly than clicking and downloading from the official site.
- The library also provides definitions of TypeScript.

## System Requirements

- Node.js
  - Hydrogen LTS `>=18.20` or
  - Iron LTS `>=20.10` or
  - later versions

## Usage

```sh
npm i @kurone-kito/japanese-law-translation
```

```ts
import { j2e } from '@kurone-kito/japanese-law-translation';
// or
import j2eJson from '@kurone-kito/japanese-law-translation/j2e.json' with { type: 'json' };

console.log(j2e['法律']);
// Output: { kana: 'ほうりつ', translation: [{ phrase: 'law', usage: '法律一般としての意味の場合', ... }, ...], ... }

console.log(j2eJson['法律']);
// Output: { kana: 'ほうりつ', translation: [{ phrase: 'law', usage: '法律一般としての意味の場合', ... }, ...], ... }
```

## API

[See documentation for details](https://github.com/kurone-kito/japanese-law-translation/blob/main/packages/jlt/docs/README.md).

### Exposed endpoints

- `@kurone-kito/japanese-law-translation`: The main entry point
- `@kurone-kito/japanese-law-translation/e2j.json`: The dictionary from
  English to Japanese
- `@kurone-kito/japanese-law-translation/j2e.json`: The dictionary from
  Japanese to English
- `@kurone-kito/japanese-law-translation/k2e.json`: The dictionary from
  Hiragana to English

### `e2j`: The dictionary from English to Japanese

`e2j.json` values are provided as is, with type definitions.

```ts
import { e2j } from '@kurone-kito/japanese-law-translation';

console.log(e2j['guarantee']);
/*
[
  {
    kana: 'ほしょう',
    word: '保証',
    examples: [
      {
        en: 'there is no guarantee from the requesting country that it will honor requests of the same sort from Japan.',
        ja: '日本国が行う同種の要請に応ずる旨の要請国の保証がないとき。',
        ref: '国際捜査共助等に関する法律第4条第2号'
      }
    ],
    notes: [],
    usage: '（１）民法、（２）国際捜査共助等に関する法律の場合'
  },
  { kana: 'ほしょう', word: '保障', examples: [], notes: [] }
]
*/
```

### `j2e`: The dictionary from Japanese to English

`j2e.json` values are provided as is, with type definitions.

```ts
import { j2e } from '@kurone-kito/japanese-law-translation';

console.log(j2e['弁償']);
/*
{
  kana: 'べんしょう',
  translations: [
    { examples: [], notes: [], phrase: 'compensation' },
    {
      examples: [
        {
          en: '…also be reimbursed for necessary expenses incurred in performing their duties as specified by Cabinet Order',
          ja: '…及び政令の定めるところによりその職務を行うために要する費用の弁償を受けるものとする',
          ref: '労働組合法第19条の8'
        }
      ],
      notes: ['【動詞】弁償する: reimburse'],
      phrase: 'reimbursement'
    }
  ]
}
*/
```

### `k2e`: The dictionary from Hiragana to English

`k2e.json` values are provided as is, with type definitions.

```ts
import { k2e } from '@kurone-kito/japanese-law-translation';

console.log(k2e['ほしょう']);
/*
[
  {
    word: '保証',
    translations: [
      {
        examples: [
          {
            en: 'there is no guarantee from the requesting country that it will honor requests of the same sort from Japan.',
            ja: '日本国が行う同種の要請に応ずる旨の要請国の保証がないとき。',
            ref: '国際捜査共助等に関する法律第4条第2号'
          }
        ],
        notes: [],
        phrase: 'guarantee',
        usage: '（１）民法、（２）国際捜査共助等に関する法律の場合'
      }
    ]
  },
  {
    word: '保障',
    translations: [
      {
        examples: [],
        notes: ['【注】制度としての保障の場合。'],
        phrase: 'security',
        usage: '原則'
      },
      { examples: [], notes: [], phrase: 'guarantee' }
    ]
  },
  {
    word: '補償',
    translations: [
      {
        examples: [],
        notes: [
          '【注】用例について「損失の補償」を参照のこと。',
          '【動詞】補償する: compensate'
        ],
        phrase: 'compensation'
      }
    ]
  }
]
*/
```

[See documentation for details](https://github.com/kurone-kito/japanese-law-translation/blob/main/packages/jlt/docs/README.md).

## Contributing

Welcome to contribute to this repository! For more details, please refer to
[CONTRIBUTING.md](https://github.com/kurone-kito/japanese-law-translation/blob/main/.github/CONTRIBUTING.md).

## LICENSE

[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
