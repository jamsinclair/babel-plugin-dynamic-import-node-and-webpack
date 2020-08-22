function getModule(path) {
  return typeof require.ensure === 'function' ? new Promise(function (resolve) {
    require.ensure([], function (require) {
      resolve(require('test-module'));
    });
  }) : Promise.resolve().then(function () {
    return babelHelpers.interopRequireWildcard(require('test-module'));
  });
}

getModule().then(function () {});
