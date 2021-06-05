import React from 'react';
import { addPostActionCreator, updatePostNextActionCreator } from '../../../redux/state';
import Post from "./Post/Post";






const MyPosts = (props) => {

  let postsElements = props.posts.map( posts => <Post message={posts.message}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }


  //при вводе данных отправляет данные в state
  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updatePostNextActionCreator(text);
    props.dispatch(action);
  }


  return (
    <div className="content__posts">
      <div className="posts__post">My posts</div>
      <div className="posts__new-post">
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          placeholder="your news..."/>
      </div>
      <div className="posts__btn">
        <button onClick={addPost}>Send</button>
      </div>
        {postsElements}
    </div>
  );
};



export default MyPosts;
