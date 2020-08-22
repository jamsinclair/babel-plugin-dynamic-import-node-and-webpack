typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('' + String({ 'answer': 42 })));
  });
}) : Promise.resolve('' + String({ 'answer': 42 })).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('' + String(['foo', 'bar'])));
  });
}) : Promise.resolve('' + String(['foo', 'bar'])).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('' + 42));
  });
}) : Promise.resolve('' + 42).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('' + String(void 0)));
  });
}) : Promise.resolve('' + String(void 0)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('' + String(undefined)));
  });
}) : Promise.resolve('' + String(undefined)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('' + String(null)));
  });
}) : Promise.resolve('' + String(null)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('' + String(true)));
  });
}) : Promise.resolve('' + String(true)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require('' + String(Symbol())));
  });
}) : Promise.resolve('' + String(Symbol())).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
