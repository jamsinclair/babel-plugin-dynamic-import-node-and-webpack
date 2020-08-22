# babel-plugin-dynamic-import-node-and-webpack

Babel plugin to transpile `import()` to both a deferred `require()`, for node, and `require.ensure`, for webpack. Allowing dual compatibility for both environments.

This plugin is a shameless patching together of hardwork by Airbnb:
- https://github.com/airbnb/babel-plugin-dynamic-import-webpack
- https://github.com/airbnb/babel-plugin-dynamic-import-node

**NOTE:** Babylon >= v6.12.0 is required to correctly parse dynamic imports.

**NOTE:** This plugin generates code compatible with Node.js and Webpack >=1. Webpack >= 2 supports `import()` natively, however by using this plugin you can share code compatible with both node and webpack.

## Installation

```sh
npm install babel-plugin-dynamic-import-node-and-webpack --save-dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["dynamic-import-node-and-webpack"]
}
```

#### Options

- *`noInterop`* - A boolean value, that if true will not interop the require calls. Useful to avoid using `require('module').default` on commonjs modules.

```json
{
  "plugins": [
    ["dynamic-import-node-and-webpack", { "noInterop": true }]
  ]
}
```

### Via CLI

```sh
$ babel --plugins dynamic-import-node-and-webpack script.js
```

### Via Node API

```javascript
require('babel-core').transform('code', {
  plugins: ['dynamic-import-node-and-webpack']
});
```

### Code Example
```javascript
Promise.all([
  import('./lib/import1'),
  import('./lib/import2')
 ]).then(([
   Import1,
   Import2
  ]) => {
   console.log(Import1);
   /* CODE HERE*/
  });
```
