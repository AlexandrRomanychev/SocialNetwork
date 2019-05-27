'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = checkTypes;

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _isPlainObject = require('./isPlainObject');

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function typecheck(types, name, obj) {
  (0, _invariant2.default)(Array.isArray(types) ? types.some(function (t) {
    return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === t;
  }) : (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === types, name + ' must be ' + (Array.isArray(types) ? 'one of' : 'a') + ' ' + types + '. Instead received a %s.', typeof obj === 'undefined' ? 'undefined' : _typeof(obj));
}

var checks = {
  buildRequest: function buildRequest(fn) {
    typecheck('function', 'buildRequest', fn);
  },
  credentials: function credentials(str) {
    var allowed = ['omit', 'same-origin', 'include'];
    (0, _invariant2.default)(allowed.indexOf(str) !== -1, 'credentials must be one of ' + allowed.join(', ') + '. Instead got %s.', str ? str.toString() : str);
  },
  fetch: function fetch(fn) {
    typecheck('function', 'fetch', fn);
  },
  handleResponse: function handleResponse(fn) {
    typecheck('function', 'handleResponse', fn);
  },
  headers: function headers(obj) {
    (0, _invariant2.default)((0, _isPlainObject2.default)(obj), 'headers must be a plain object with string values. Instead received a %s.', typeof obj === 'undefined' ? 'undefined' : _typeof(obj));
  },
  method: function method(str) {
    typecheck('string', 'method', str);
  },
  redirect: function redirect(str) {
    var allowed = ['follow', 'error', 'manual'];
    (0, _invariant2.default)(allowed.indexOf(str) !== -1, 'redirect must be one of ' + allowed.join(', ') + '. Instead got %s.', str ? str.toString() : str);
  },
  mode: function mode(str) {
    var allowed = ['cors', 'no-cors', 'same-origin', 'navigate'];
    (0, _invariant2.default)(allowed.indexOf(str) !== -1, 'mode must be one of ' + allowed.join(', ') + '. Instead got %s.', str ? str.toString() : str);
  },
  refreshInterval: function refreshInterval(num) {
    typecheck('number', 'refreshInterval', num);
    (0, _invariant2.default)(num >= 0, 'refreshInterval must be positive or 0.');
    (0, _invariant2.default)(num !== Infinity, 'refreshInterval must not be Infinity.');
  },
  Request: function Request(fn) {
    typecheck('function', 'Request', fn);
  },
  then: function then(fn) {
    typecheck(['function', 'undefined'], 'then', fn);
  },
  andThen: function andThen(fn) {
    typecheck(['function', 'undefined'], 'andThen', fn);
  },
  catch: function _catch(fn) {
    typecheck(['function', 'undefined'], 'catch', fn);
  },
  andCatch: function andCatch(fn) {
    typecheck(['function', 'undefined'], 'andCatch', fn);
  }
};

function checkTypes(mapping) {
  Object.keys(mapping).forEach(function (key) {
    if (checks[key]) {
      checks[key](mapping[key]);
    }
  });
}