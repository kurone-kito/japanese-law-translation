import config from '@kurone-kito/prettier-config' with { type: 'json' };

/** @type {import('prettier').Config} */
export default {
  ...config,
  plugins: [
    'prettier-plugin-packagejson',
    'prettier-plugin-sh',
    'prettier-plugin-sort-json',
  ],
};
