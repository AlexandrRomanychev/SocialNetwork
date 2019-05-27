'use strict';

exports.__esModule = true;
exports.default = handleResponse;

var _errors = require('./errors');

var _errors2 = _interopRequireDefault(_errors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function handleResponse(response) {
  if (response.headers.get('content-length') === '0' || response.status === 204) {
    return;
  }

  var json = response.json(); // TODO: support other response types

  if (response.status >= 200 && response.status < 300) {
    // TODO: support custom acceptable statuses
    return json;
  } else {
    return json.then(function (cause) {
      return Promise.reject((0, _errors2.default)(cause));
    });
  }
}