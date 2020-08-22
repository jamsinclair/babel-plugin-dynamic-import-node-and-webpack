import { existsSync } from 'fs';
import finalHandler from 'finalhandler';
import http from 'http';
import path from 'path';
import webpack from 'webpack';
import test from 'tape';
import puppeteer from 'puppeteer';
import serveStatic from 'serve-static';

const DIST_DIR = path.resolve(__dirname, 'dist');
const ENTRY_FILE = path.resolve(__dirname, './src/index.js');

const webpackConfig = {
  mode: 'development',
  entry: {
    index: ENTRY_FILE,
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: DIST_DIR,
    publicPath: '/dist/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['./src/index.js'],
          },
        },
      },
    ],
  },
};

const compiler = webpack(webpackConfig);
const runCompileAsync = () => new Promise((resolve, reject) => {
  compiler.run((err, stats) => {
    if (err || stats.hasErrors()) {
      return reject(new Error('Webpack compilation failed'));
    }
    return resolve();
  });
});

const startServer = (port = 3000) => {
  const serve = serveStatic(__dirname, { index: ['index.html'] });
  const server = http.createServer((req, res) => {
    serve(req, res, finalHandler(req, res));
  });
  server.listen(port);
  return {
    close() {
      return new Promise((resolve) => server.close(resolve));
    },
  };
};

test('webpack compiled bundles are code split and work in the browser', async (t) => {
  await runCompileAsync();

  const mainBundleExists = existsSync(path.resolve(DIST_DIR), 'index.bundle.js');
  const secondBundleExists = existsSync(path.resolve(DIST_DIR), '0.bundle.js');

  t.assert(mainBundleExists && secondBundleExists, 'creates two js bundles from entry file');

  const server = startServer();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000');

  const loadedDynamicModule = await page.waitFor('#dynamic-module-text', { timeout: 5000 }).then(() => true).catch(() => false);

  t.assert(loadedDynamicModule, 'dynamic module loaded in the browser');

  await browser.close();
  await server.close();
});
