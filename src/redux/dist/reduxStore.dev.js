"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _profileReducer = _interopRequireDefault(require("./profileReducer"));

var _dialogsReducer = _interopRequireDefault(require("./dialogsReducer"));

var _sidebarPageReducer = _interopRequireDefault(require("./sidebarPageReducer"));

var _sidebarReducer = _interopRequireDefault(require("./sidebarReducer"));

var _friendsBarReducer = _interopRequireDefault(require("./friendsBarReducer"));

var _usersReducer = _interopRequireDefault(require("./usersReducer"));

var _authRedux = _interopRequireDefault(require("./auth-redux"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  profilePage: _profileReducer["default"],
  dialogsPage: _dialogsReducer["default"],
  sidebarPage: _sidebarPageReducer["default"],
  sidebar: _sidebarReducer["default"],
  friendsBar: _friendsBarReducer["default"],
  usersPage: _usersReducer["default"],
  auth: _authRedux["default"]
});
var store = (0, _redux.createStore)(reducers, (0, _redux.applyMiddleware)(_reduxThunk["default"]));
window.store = store;
var _default = store;
exports["default"] = _default;