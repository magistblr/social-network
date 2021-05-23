import {rerenderEntireTree} from '../render';


let state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hi, how are you?'},
      {id: 2, message: "It's my first post"}
    ]
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
      {id: 2, message: 'How are you?'},
      {id: 3, message: 'I am a normal popover and i can have text and everything'},
      {id: 4, message: 'YO'},
      {id: 5, message: 'YO'}
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

export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}



export default state;