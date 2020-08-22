const testModule = typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-module'));
  });
}) : Promise.resolve().then(() => babelHelpers.interopRequireWildcard(require('test-module')));
