typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${{ 'answer': 42 }}`));
  });
}) : Promise.resolve(`${{ 'answer': 42 }}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${['foo', 'bar']}`));
  });
}) : Promise.resolve(`${['foo', 'bar']}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${42}`));
  });
}) : Promise.resolve(`${42}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${void 0}`));
  });
}) : Promise.resolve(`${void 0}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${undefined}`));
  });
}) : Promise.resolve(`${undefined}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${null}`));
  });
}) : Promise.resolve(`${null}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${true}`));
  });
}) : Promise.resolve(`${true}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${Symbol()}`));
  });
}) : Promise.resolve(`${Symbol()}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
