# ↔️ Japanese Law Translation

Language: [🇬🇧](https://github.com/kurone-kito/japanese-law-translation/blob/main/README.md)
 | **🇯🇵**

非公式のライブラリで、日本の法令用語の英訳をまとめています。

- 出典: <https://www.japaneselawtranslation.go.jp/>
- 参考: [私のポスト](https://x.com/kurone_kito/status/1817756249112617423)

## 利点

- 公式サイトで配布されているXMLやCSVより扱いやすいJSON形式の辞書を提供します。
- npmから利用できるため、公式サイトでダウンロードするよりも手早く使えます。
- TypeScriptの型定義も付属しています。

## 動作環境

- Node.js: 以下のいずれかのバージョン
  - Iron LTS (`^20.11.x`)
  - Jod LTS (`^22.x.x`)
  - 最新版 (`>=24.x.x`)

## 使い方

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

### 検索例

辞書を使って簡単な検索を実装できます。

```ts
import { e2j } from '@kurone-kito/japanese-law-translation';

const query = 'guar';
const hits = Object.keys(e2j).filter((word) => word.startsWith(query));
console.log(hits);
// Output: ['guarantee', ...]
```

## API

[詳細はドキュメントを参照してください](https://github.com/kurone-kito/japanese-law-translation/blob/main/packages/jlt/docs/README.md)。

### 公開しているエンドポイント

- `@kurone-kito/japanese-law-translation`: メインエントリ
- `@kurone-kito/japanese-law-translation/e2j.json`: 英語から日本語への辞書
- `@kurone-kito/japanese-law-translation/j2e.json`: 日本語から英語への辞書
- `@kurone-kito/japanese-law-translation/k2e.json`: ひらがなから英語への辞書

### `e2j`: 英語から日本語への辞書

e2j.jsonの値はそのまま型定義とともに提供されます。

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

### `j2e`: 日本語から英語への辞書

j2e.jsonの値はそのまま型定義とともに提供されます。

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

### `k2e`: ひらがなから英語への辞書

k2e.jsonの値はそのまま型定義とともに提供されます。

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

[詳細はドキュメントを参照してください](https://github.com/kurone-kito/japanese-law-translation/blob/main/packages/jlt/docs/README.md)。

## 貢献

このリポジトリへの貢献を歓迎します。詳しくは
[CONTRIBUTING.md](https://github.com/kurone-kito/japanese-law-translation/blob/main/.github/CONTRIBUTING.md)
をご覧ください。

依存関係のインストールは次のコマンドで行えます。

```sh
pnpm install
```

テストには [vitest](https://vitest.dev/) が必要です。以下で実行できます。

```sh
pnpm test
```

## ライセンス

[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)

辞書データは
[Japanese Law Translation Database System](https://www.japaneselawtranslation.go.jp/)
から取得したもので、サイトに記載のとおりCC BY 4.0でライセンスされています。

### 免責事項

本プロジェクトで使用している辞書は法務省の公式訳に基づいていますが、
内容の正確性や最新性を保証するものではありません。
