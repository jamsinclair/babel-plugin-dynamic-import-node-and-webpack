typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('my-module'));
  });
}) : Promise.resolve().then(() => require('my-module'));
typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require('my-module'));
  });
}) : Promise.resolve().then(() => require('my-module'));
