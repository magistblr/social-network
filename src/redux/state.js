import {rerenderEntireTree} from '../render';


let state = {
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
    ]
},
  sidebarPage: {
    navbar: [
      {id: 1, name: 'Profile', url: '/profile'},
      {id: 2, name: 'Messages', url: '/dialogs'},
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
  }
}

//позволяет выводить state в консоли
window.state = state;


//добавление новых постов
export let addPost = () => {
  let newPost = {
    id: 3,
    message: state.profilePage.newPostText,
  };

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}



export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};




export default state;