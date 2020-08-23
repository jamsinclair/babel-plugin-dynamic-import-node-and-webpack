# babel-plugin-dynamic-import-node-and-webpack

Babel plugin to transpile `import()` to both a deferred `require()`, for node, and `require.ensure`, for webpack. Allowing dual compatibility for both environments.

**Why would you need this?** If you have a shared module with dynamic imports that needs to be shared between both node and browser environments and don't want to do additional transforming with babel.

This plugin is a shameless patching together of hardwork by Airbnb:
- https://github.com/airbnb/babel-plugin-dynamic-import-webpack
- https://github.com/airbnb/babel-plugin-dynamic-import-node

**NOTE:** Babylon >= v6.12.0 is required to correctly parse dynamic imports.

**NOTE:** Webpack >= 2 supports `import()` natively. Only consider using this plugin if you need code that can interop between both node and Webpack without another babel transform.

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
