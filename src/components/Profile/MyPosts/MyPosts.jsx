import React from 'react';

import Post from "./Post/Post";

const MyPosts = (props) => {

  let postsElements = props.posts.map( posts => <Post message={posts.message}/>);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className="content__posts">
      <div className="posts__post">My posts</div>
      <div className="posts__new-post">
        <textarea ref={newPostElement} name="text" placeholder="your news..." wrap="soft"/>
      </div>
      <div className="posts__btn">
        <button onClick={addPost}>Send</button>
      </div>
      {postsElements}
    </div>
  );
};



export default MyPosts;
