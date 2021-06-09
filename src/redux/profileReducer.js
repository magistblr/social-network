const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  posts: [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: "It's my first post"}
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:  {
      let newPost = {
        id: 3,
        message: state.newPostText,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      };
    }
    default:
      return state;
  }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updatePostNextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export default profileReducer;