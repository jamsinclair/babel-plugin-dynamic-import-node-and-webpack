typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`1`));
  });
}) : Promise.resolve().then(() => babelHelpers.interopRequireWildcard(require(`1`)));
typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`${tag`2`}`));
  });
}) : Promise.resolve(`${tag`2`}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
typeof require.ensure === 'function' ? new Promise(resolve => {
  require.ensure([], require => {
    resolve(require(`3-${MODULE}`));
  });
}) : Promise.resolve(`3-${MODULE}`).then(s => babelHelpers.interopRequireWildcard(require(s)));
