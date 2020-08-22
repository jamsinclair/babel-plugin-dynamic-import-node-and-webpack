var _this = this;

var _marked = /*#__PURE__*/regeneratorRuntime.mark(f);

typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require("" + String(MODULE)));
  });
}) : Promise.resolve("" + String(MODULE)).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});

var i = 0;
typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require("" + i++));
  });
}) : Promise.resolve("" + i++).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});

typeof require.ensure === 'function' ? new Promise(function (resolve) {
  require.ensure([], function (require) {
    resolve(require("" + String(fn())));
  });
}) : Promise.resolve("" + String(fn())).then(function (s) {
  return babelHelpers.interopRequireWildcard(require(s));
});

babelHelpers.asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(typeof require.ensure === 'function')) {
            _context.next = 4;
            break;
          }

          _context.t0 = new Promise(function (resolve) {
            require.ensure([], function (require) {
              resolve(require("" + String((yield "x"))));
            });
          });
          _context.next = 13;
          break;

        case 4:
          _context.t1 = Promise;
          _context.t2 = String;
          _context.next = 8;
          return "x";

        case 8:
          _context.t3 = _context.sent;
          _context.t4 = (0, _context.t2)(_context.t3);
          _context.t5 = "" + _context.t4;

          _context.t6 = function (s) {
            return babelHelpers.interopRequireWildcard(require(s));
          };

          _context.t0 = _context.t1.resolve.call(_context.t1, _context.t5).then(_context.t6);

        case 13:
          return _context.abrupt("return", _context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, _this);
}));

function f() {
  return regeneratorRuntime.wrap(function f$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!(typeof require.ensure === 'function')) {
            _context2.next = 4;
            break;
          }

          new Promise(function (resolve) {
            require.ensure([], function (require) {
              resolve(require("" + String((yield "x"))));
            });
          });
          _context2.next = 13;
          break;

        case 4:
          _context2.t0 = Promise;
          _context2.t1 = String;
          _context2.next = 8;
          return "x";

        case 8:
          _context2.t2 = _context2.sent;
          _context2.t3 = (0, _context2.t1)(_context2.t2);
          _context2.t4 = "" + _context2.t3;

          _context2.t5 = function (s) {
            return babelHelpers.interopRequireWildcard(require(s));
          };

          _context2.t0.resolve.call(_context2.t0, _context2.t4).then(_context2.t5);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, _marked, this);
}
