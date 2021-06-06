"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateNewMessageBodyCreator = exports.sendMessageCreator = void 0;
var UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
var SEND_MESSAGE = 'SEND-MESSAGE';
var initialState = {
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
};

var dialogsReducer = function dialogsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      var body = state.newMessageBody;
      state.newMessageBody = '';
      state.messages.push({
        id: 6,
        message: body
      });
      return state;

    default:
      return state;
  }
};

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
};

exports.updateNewMessageBodyCreator = updateNewMessageBodyCreator;
var _default = dialogsReducer;
exports["default"] = _default;