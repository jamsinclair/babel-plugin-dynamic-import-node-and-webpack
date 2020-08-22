typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('my-module'));
  });
}) : Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require('my-module'));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('my-module'));
  });
}) : Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require('my-module'));
});
