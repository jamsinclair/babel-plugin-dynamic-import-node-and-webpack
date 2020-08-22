(typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('test-module'));
  });
}) : Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require('test-module'));
})).then(function () {
  return typeof require.ensure === 'function' ? new Promise(function (resolve) {
    require.ensure([], function (require) {
      resolve(require('test-module-2'));
    });
  }) : Promise.resolve().then(function () {
    return babelHelpers.interopRequireWildcard(require('test-module-2'));
  });
});
Promise.all([typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('test-1'));
  });
}) : Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require('test-1'));
}), typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('test-2'));
  });
}) : Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require('test-2'));
}), typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('test-3'));
  });
}) : Promise.resolve().then(function () {
  return babelHelpers.interopRequireWildcard(require('test-3'));
})]).then(function () {});
