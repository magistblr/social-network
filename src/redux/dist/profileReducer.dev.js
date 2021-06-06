"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updatePostNextActionCreator = exports.addPostActionCreator = void 0;
var ADD_POST = 'ADD-POST';
var UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
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
      var newPost = {
        id: 3,
        message: state.newPostText
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;

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