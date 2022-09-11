import babel from 'rollup-plugin-babel';
import html from 'rollup-plugin-html';
import postcss from 'rollup-plugin-postcss';
import resolve from 'rollup-plugin-node-resolve';
import prettier from 'rollup-plugin-prettier';
import * as insert from 'rollup-plugin-insert';
import terser from 'rollup-plugin-terser';
import notify from 'rollup-plugin-notify';
import json from '@rollup/plugin-json'

const FILES_TO_COMPILE = ['video'];
const path = require('path');
const campaignName = path.basename(process.cwd());
const isProduction = process.env.NODE_ENV === 'production';

const getVariantPath = (id, campaignName) => (
  id.replace(new RegExp(`(.*?)${campaignName}/`), '')
);

const plugins = [
  json(),
  resolve(),
  notify(),
  postcss({
    inject: false,
    minimize: true
  }),
  html({
    include: '**/*.html',
    htmlMinifierOptions: {
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      conservativeCollapse: true,
      minifyJS: true
    }
  }),
  babel({
    babelrc: false,
    exclude: 'node_modules/**',
    presets: [['@babel/env', { modules: false }]]
  }),
  prettier({
    tabWidth: 2,
    singleQuote: true,
    jsxSingleQuote: false,
    trailingComma: 'es5',
    filepath: `dist/${campaignName}.js`
  }),
  isProduction && terser.terser(),
  insert.transform((code, id) => `/* ${getVariantPath(id, campaignName)} */\n${code}`)
]

const createConfig = (file_path) => ({
  input: `demo/demo.js`,
  output: {
    file: `dist/${file_path}.js`,
    format: 'iife',
    footer: `//# sourceURL=url://lc.test/${file_path}.js`
  },
  plugins,
});

export default async () => {
  return FILES_TO_COMPILE.map((file_name) => createConfig(file_name));
}
