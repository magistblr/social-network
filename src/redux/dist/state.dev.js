"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateNewPostText = exports.addPost = void 0;

var _render = require("../render");

var state = {
  profilePage: {
    posts: [{
      id: 1,
      message: 'Hi, how are you?'
    }, {
      id: 2,
      message: "It's my first post"
    }],
    newPostText: ''
  },
  dialogsPage: {
    dialogs: [{
      id: 1,
      name: 'Dima'
    }, {
      id: 2,
      name: 'Andrey'
    }, {
      id: 3,
      name: 'Sveta'
    }, {
      id: 4,
      name: 'Sasha'
    }, {
      id: 5,
      name: 'Victor'
    }, {
      id: 6,
      name: 'Valera'
    }],
    messages: [{
      id: 1,
      message: 'Hi'
    }],
    friendMessages: [{
      id: 1,
      message: 'How are you?'
    }]
  },
  sidebarPage: {
    navbar: [{
      id: 1,
      name: 'Profile',
      url: '/profile'
    }, {
      id: 2,
      name: 'Messages',
      url: '/dialogs'
    }, {
      id: 3,
      name: 'News',
      url: '/news'
    }, {
      id: 4,
      name: 'Music',
      url: '/music'
    }, {
      id: 5,
      name: 'Settings',
      url: '/settings'
    }]
  },
  friendsBar: {
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
  }
}; //позволяет выводить state в консоли

window.state = state; //добавление новых постов

var addPost = function addPost() {
  var newPost = {
    id: 3,
    message: state.profilePage.newPostText
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  (0, _render.rerenderEntireTree)(state);
};

exports.addPost = addPost;

var updateNewPostText = function updateNewPostText(newText) {
  state.profilePage.newPostText = newText;
  (0, _render.rerenderEntireTree)(state);
};

exports.updateNewPostText = updateNewPostText;
var _default = state;
exports["default"] = _default;