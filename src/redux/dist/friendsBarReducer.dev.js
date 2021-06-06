"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  friends: [{
    id: 1,
    name: 'Andrew'
  }, {
    id: 2,
    name: 'Sasha'
  }, {
    id: 3,
    name: 'Sveta'
  }]
};

var friendsBarReducer = function friendsBarReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
};

var _default = friendsBarReducer;
exports["default"] = _default;