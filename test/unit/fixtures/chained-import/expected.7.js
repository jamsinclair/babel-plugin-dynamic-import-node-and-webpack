(typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-module'));
  });
}) : Promise.resolve().then(() => babelHelpers.interopRequireWildcard(require('test-module')))).then(() => typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-module-2'));
  });
}) : Promise.resolve().then(() => babelHelpers.interopRequireWildcard(require('test-module-2'))));
Promise.all([typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-1'));
  });
}) : Promise.resolve().then(() => babelHelpers.interopRequireWildcard(require('test-1'))), typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-2'));
  });
}) : Promise.resolve().then(() => babelHelpers.interopRequireWildcard(require('test-2'))), typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-3'));
  });
}) : Promise.resolve().then(() => babelHelpers.interopRequireWildcard(require('test-3')))]).then(() => {});
