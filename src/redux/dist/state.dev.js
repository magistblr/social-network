"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateNewMessageBodyCreator = exports.sendMessageCreator = exports.updatePostNextActionCreator = exports.addPostActionCreator = void 0;
var ADD_POST = 'ADD-POST';
var UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
var UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
var SEND_MESSAGE = 'SEND-MESSAGE';
var store = {
  _state: {
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
      }],
      newMessageBody: ''
    },
    sidebarPage: {
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
  },
  getState: function getState() {
    return this._state;
  },
  //паттерн observer
  subscribe: function subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber: function _callSubscriber() {
    console.log('State');
  },
  dispatch: function dispatch(action) {
    if (action.type === ADD_POST) {
      //добавление новых постов
      var newPost = {
        id: 3,
        message: this._state.profilePage.newPostText
      };

      this._state.profilePage.posts.push(newPost);

      this._state.profilePage.newPostText = '';

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;

      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;

      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      var body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = '';

      this._state.dialogsPage.messages.push({
        id: 6,
        message: body
      });

      this._callSubscriber(this._state);
    }
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

var sendMessageCreator = function sendMessageCreator() {
  return {
    type: SEND_MESSAGE
  };
};

exports.sendMessageCreator = sendMessageCreator;

var updateNewMessageBodyCreator = function updateNewMessageBodyCreator(body) {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
}; //позволяет выводить state в консоли


exports.updateNewMessageBodyCreator = updateNewMessageBodyCreator;
window.store = store;
var _default = store;
exports["default"] = _default;