function getModule(path) {
  return typeof require.ensure === 'function' ? new Promise(resolve => {
    require.ensure([], require => {
      resolve(require('test-module'));
    });
  }) : Promise.resolve().then(() => babelHelpers.interopRequireWildcard(require('test-module')));
}

getModule().then(() => {});
