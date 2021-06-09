"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updatePostNextActionCreator = exports.addPostActionCreator = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_POST = 'ADD_POST';
var UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
var initialState = {
  posts: [{
    id: 1,
    message: 'Hi, how are you?'
  }, {
    id: 2,
    message: "It's my first post"
  }],
  newPostText: ''
};

var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      {
        var newPost = {
          id: 3,
          message: state.newPostText
        };
        return _objectSpread({}, state, {
          posts: [].concat(_toConsumableArray(state.posts), [newPost]),
          newPostText: ''
        });
      }

    case UPDATE_NEW_POST_TEXT:
      {
        return _objectSpread({}, state, {
          newPostText: action.newText
        });
      }

    default:
      return state;
  }
};

var addPostActionCreator = function addPostActionCreator() {
  return {
    type: ADD_POST
  };
};

exports.addPostActionCreator = addPostActionCreator;

var updatePostNextActionCreator = function updatePostNextActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

exports.updatePostNextActionCreator = updatePostNextActionCreator;
var _default = profileReducer;
exports["default"] = _default;