"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PromiseState = function () {

  // creates a new PromiseState that is pending
  PromiseState.create = function create(meta) {
    return new PromiseState({
      pending: true,
      meta: meta
    });
  };

  // creates as PromiseState that is refreshing
  // can be called without a previous PromiseState and will be both pending and refreshing


  PromiseState.refresh = function refresh(previous, meta) {
    var p = previous || PromiseState.create(meta);

    return new PromiseState({
      pending: p.pending,
      refreshing: true,
      fulfilled: p.fulfilled,
      rejected: p.rejected,
      value: p.value,
      reason: p.reason,
      meta: p.meta
    });
  };

  // creates a PromiseState that is resolved with the given value.
  // if the given value is already a PromiseState,
  // it will be returned as is and ignore the provided meta.


  PromiseState.resolve = function resolve(value, meta) {
    if (value instanceof PromiseState) {
      return value;
    }

    return new PromiseState({
      fulfilled: true,
      value: value,
      meta: meta
    });
  };

  // creates a PromiseState that is rejected with the given reason


  PromiseState.reject = function reject(reason, meta) {
    return new PromiseState({
      rejected: true,
      reason: reason,
      meta: meta
    });
  };

  // The PromiseState.all(iterable) method returns a PromiseState
  // that resolves when all of the PromiseStates in the iterable
  // argument have resolved, or rejects with the reason of the
  // first passed PromiseState that rejects.


  PromiseState.all = function all(iterable) {
    if (!Array.isArray(iterable)) {
      iterable = Array.from(iterable);
    }

    return new PromiseState({
      pending: iterable.some(function (ps) {
        return ps.pending;
      }),
      refreshing: iterable.some(function (ps) {
        return ps.refreshing;
      }),
      fulfilled: iterable.every(function (ps) {
        return ps.fulfilled;
      }),
      rejected: iterable.some(function (ps) {
        return ps.rejected;
      }),
      value: iterable.map(function (ps) {
        return ps.value;
      }),
      reason: (iterable.find(function (ps) {
        return ps.reason;
      }) || {}).reason,
      meta: iterable.map(function (ps) {
        return ps.meta;
      })
    });
  };

  // The PromiseState.race(iterable) method returns a PromiseState
  // that resolves or rejects as soon as one of the PromiseStates in
  // the iterable resolves or rejects, with the value or reason
  // from that PromiseState.


  PromiseState.race = function race(iterable) {
    if (!Array.isArray(iterable)) {
      iterable = Array.from(iterable);
    }

    var winner = iterable.find(function (ps) {
      return ps.settled;
    });

    return new PromiseState({
      pending: !winner && iterable.some(function (ps) {
        return ps.pending;
      }),
      refreshing: !winner && iterable.some(function (ps) {
        return ps.refreshing;
      }),
      fulfilled: winner && winner.fulfilled,
      rejected: winner && winner.rejected,
      value: winner && winner.value,
      reason: winner && winner.reason,
      meta: winner && winner.meta
    });
  };

  // Constructor for creating a raw PromiseState. DO NOT USE DIRECTLY. Instead, use PromiseState.create() or other static constructors


  function PromiseState(_ref) {
    var _ref$pending = _ref.pending,
        pending = _ref$pending === undefined ? false : _ref$pending,
        _ref$refreshing = _ref.refreshing,
        refreshing = _ref$refreshing === undefined ? false : _ref$refreshing,
        _ref$fulfilled = _ref.fulfilled,
        fulfilled = _ref$fulfilled === undefined ? false : _ref$fulfilled,
        _ref$rejected = _ref.rejected,
        rejected = _ref$rejected === undefined ? false : _ref$rejected,
        _ref$value = _ref.value,
        value = _ref$value === undefined ? null : _ref$value,
        _ref$reason = _ref.reason,
        reason = _ref$reason === undefined ? null : _ref$reason,
        _ref$meta = _ref.meta,
        meta = _ref$meta === undefined ? {} : _ref$meta;

    _classCallCheck(this, PromiseState);

    this.pending = pending;
    this.refreshing = refreshing;
    this.fulfilled = fulfilled;
    this.rejected = rejected;
    this.settled = fulfilled || rejected;
    this.value = value;
    this.reason = reason;
    this.meta = meta;
  }

  // Appends and calls fulfillment and rejection handlers on the PromiseState,
  // and returns a new PromiseState resolving to the return value of the called handler,
  // or to its original settled value if the promise was not handled.
  // The handler functions take the value/reason and meta as parameters.
  // (i.e. if the relevant handler onFulfilled or onRejected is undefined).
  // Note, unlike Promise.then(), these handlers are called immediately.


  PromiseState.prototype.then = function then(onFulFilled, onRejected) {
    if (this.fulfilled && onFulFilled) {
      return PromiseState.resolve(onFulFilled(this.value, this.meta), this.meta);
    }

    if (this.rejected && onRejected) {
      return PromiseState.resolve(onRejected(this.reason, this.meta), this.meta);
    }

    return this;
  };

  // Appends and calls a rejection handler callback to the PromiseState,
  // and returns a new PromiseState resolving to the return value of the
  // callback if it is called, or to its original fulfillment value if
  // the PromiseState is instead fulfilled. The handler function take
  // the reason and meta as parameters. Note, unlike Promise.catch(),
  // this handlers is called immediately.


  PromiseState.prototype.catch = function _catch(onRejected) {
    return this.then(undefined, onRejected);
  };

  return PromiseState;
}();

exports.default = PromiseState;