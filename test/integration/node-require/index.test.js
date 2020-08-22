/* eslint import/no-extraneous-dependencies: 0, import/no-dynamic-require: 0, global-require: 0 */
import test from 'tape';
import { join } from 'path';
import { readFileSync, writeFileSync } from 'fs';
import mkdirp from 'mkdirp';
import { transformSync } from '@babel/core';

const transformCodeWithPlugin = (code, options = {}) => {
  const result = transformSync(code, {
    presets: [],
    plugins: [['./src/index.js', options]],
  });

  return result.code;
};

const transpileFile = (filename, inputDir, outputDir, pluginOptions) => {
  const src = readFileSync(join(inputDir, filename), 'utf-8');
  mkdirp.sync(outputDir);
  writeFileSync(join(outputDir, filename), transformCodeWithPlugin(src, pluginOptions));
};

test('can require module with dynamic import', (t) => {
  const SOURCE_DIR = join(__dirname, 'src');
  const TRANSPILED_DIR = join(__dirname, 'dist-with-interop');

  transpileFile('index.js', SOURCE_DIR, TRANSPILED_DIR);
  transpileFile('dynamic-module.js', SOURCE_DIR, TRANSPILED_DIR);

  const testModule = require(TRANSPILED_DIR);
  testModule.then((result) => {
    t.is(result.default, 'Hello World');
    t.end();
  });
});

test('can require module with dynamic import and no default export', (t) => {
  const SOURCE_DIR = join(__dirname, 'src');
  const TRANSPILED_DIR = join(__dirname, 'dist-with-no-interop');
  const pluginOptions = { noInterop: true };

  transpileFile('index.js', SOURCE_DIR, TRANSPILED_DIR, pluginOptions);
  transpileFile('dynamic-module.js', SOURCE_DIR, TRANSPILED_DIR, pluginOptions);

  const testModule = require(TRANSPILED_DIR);
  testModule.then((result) => {
    t.is(result, 'Hello World');
    t.end();
  });
});
