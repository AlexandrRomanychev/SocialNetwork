'use strict';

exports.__esModule = true;
exports.default = newError;
function newError(cause) {
  var e = new Error(parse(cause));
  e.cause = cause;
  return e;
}

function parse(cause) {
  var error = cause.error,
      message = cause.message;


  if (error) {
    return error;
  } else if (message) {
    return message;
  } else {
    return '';
  }
}