import React from 'react';

import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map( posts => <Post message={posts.message}/>);

  let newPostElement = React.createRef();


  
  let addPost = () => {
    props.addPost();
    props.updateNewPostText('');
  }


  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  }

  return (
    <div className="content__posts">
      <div className="posts__post">My posts</div>
      <div className="posts__new-post">
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          name="text"
          placeholder="your news..."
          wrap="soft"/>
      </div>
      <div className="posts__btn">
        <button onClick={addPost}>Send</button>
      </div>
        {postsElements}
    </div>
  );
};



export default MyPosts;
