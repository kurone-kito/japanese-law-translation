# ↔️ Japanese Law Translation Builder

This package converts the XML dictionary provided by the official
Japanese Law Translation website into JSON files.

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

You can download the XML and generate the JSON dictionaries with the
following command:

```sh
pnpm --filter @kurone-kito/japanese-law-translation build
```

Internally this command executes `jlt-crawler` to fetch the XML and pipes
the result to `jlt-builder`, creating `e2j.json`, `j2e.json` and `k2e.json`
under `packages/jlt/src`.

If you already have an XML file, run:

```sh
cat dictionary.xml | pnpm run builder
```

## Contributing

Welcome to contribute to this repository! For more details, please refer to
[CONTRIBUTING.md](https://github.com/kurone-kito/japanese-law-translation/blob/main/.github/CONTRIBUTING.md).

## LICENSE

[CC-BY-4.0](https://creativecommons.org/licenses/by/4.0/)
