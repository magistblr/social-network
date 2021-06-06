import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarPageReducer from "./sidebarPageReducer";



let store = {
  _state: {

    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?'},
        {id: 2, message: "It's my first post"}
      ],
      newPostText: ''
    },

    dialogsPage: {
      dialogs: [
        {id: 1, name: 'Dima'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
      ],
      messages: [
        {id: 1, message: 'Hi'},
      ],
      friendMessages: [
        {id: 1, message: 'How are you?'}
      ],
      newMessageBody: ''
    },

    sidebarPage: {
      navbar: [
        {id: 1, name: 'Profile', url: '/profile'},
        {id: 2, name: 'Messages', url: '/messages'},
        {id: 3, name: 'News', url: '/news'},
        {id: 4, name: 'Music', url: '/music'},
        {id: 5, name: 'Settings', url: '/settings'},
      ]
    },

    friendsBar: {
      friends: [
        {id: 1, name: 'Andrew'},
        {id: 2, name: 'Sasha'},
        {id: 3, name: 'Sveta'},
      ]
    },
  },

  getState() {
    return this._state;
  },

  //паттерн observer
  subscribe(observer) {
    this._callSubscriber = observer;
    },

  _callSubscriber() {
    console.log('State');
  },

  dispatch(action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarPageReducer(this._state.sidebarPage, action);

    this._callSubscriber(this._state);

  }
}


//позволяет выводить state в консоли
window.store = store;

export default store;







