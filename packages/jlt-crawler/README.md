# ↔️ Japanese Law Translation Crawler

This package downloads the latest XML dictionary from the official
Japanese Law Translation website.

## System Requirements

- Node.js
  - Iron LTS `^20.11.x` or
  - Jod LTS `>=22.x.x` or
  - later versions

## Usage

Install the dependencies first:

```sh
pnpm install
```

To download the XML dictionary, run:

```sh
pnpm run crawler > dictionary.xml
```

Specify a version number if you need an older archive:

```sh
pnpm run crawler 1.23 > dictionary.xml
```

You can pipe the result directly to `jlt-builder` to generate JSON files:

```sh
pnpm run crawler | pnpm run builder
```

## Contributing

Welcome to contribute to this repository! For more details, please refer to [CONTRIBUTING.md](https://github.com/kurone-kito/japanese-law-translation/blob/main/.github/CONTRIBUTING.md).

## LICENSE

[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
