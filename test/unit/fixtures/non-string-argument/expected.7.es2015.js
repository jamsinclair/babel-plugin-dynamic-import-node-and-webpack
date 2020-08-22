typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require("".concat({
      'answer': 42
    })));
  });
}) : Promise.resolve("".concat({
  'answer': 42
})).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require("".concat(['foo', 'bar'])));
  });
}) : Promise.resolve("".concat(['foo', 'bar'])).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require("".concat(42)));
  });
}) : Promise.resolve("".concat(42)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require("".concat(void 0)));
  });
}) : Promise.resolve("".concat(void 0)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require("".concat(undefined)));
  });
}) : Promise.resolve("".concat(undefined)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require("".concat(null)));
  });
}) : Promise.resolve("".concat(null)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require("".concat(true)));
  });
}) : Promise.resolve("".concat(true)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require("".concat(Symbol())));
  });
}) : Promise.resolve("".concat(Symbol())).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});
