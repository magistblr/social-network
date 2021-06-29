"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var initialState = {
  navbar: [{
    id: 1,
    name: 'Profile',
    url: '/profile'
  }, {
    id: 2,
    name: 'Messages',
    url: '/messages'
  }, {
    id: 3,
    name: 'Users',
    url: '/users'
  }, {
    id: 4,
    name: 'News',
    url: '/news'
  }, {
    id: 5,
    name: 'Music',
    url: '/music'
  }, {
    id: 6,
    name: 'Settings',
    url: '/settings'
  }]
};

var sidebarPageReducer = function sidebarPageReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  return state;
};

var _default = sidebarPageReducer;
exports["default"] = _default;