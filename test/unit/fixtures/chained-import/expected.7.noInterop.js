(typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-module'));
  });
}) : Promise.resolve().then(() => require('test-module'))).then(() => typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-module-2'));
  });
}) : Promise.resolve().then(() => require('test-module-2')));
Promise.all([typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-1'));
  });
}) : Promise.resolve().then(() => require('test-1')), typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-2'));
  });
}) : Promise.resolve().then(() => require('test-2')), typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('test-3'));
  });
}) : Promise.resolve().then(() => require('test-3'))]).then(() => {});
