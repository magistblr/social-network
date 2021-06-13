import React from 'react';
import Post from "./Post/Post";






const MyPosts = (props) => {
<<<<<<< HEAD
  let postsElements = props.posts.map( posts => <Post message={posts.message}/>);
=======
  let postsElements = props.posts.map( posts => <Post message={posts.message} key={posts.id}/>);
>>>>>>> second

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }


  //при вводе данных отправляет данные в state
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
          placeholder="your news..."/>
      </div>
      <div className="posts__btn">
        <button onClick={onAddPost}>Send</button>
      </div>
        {postsElements}
    </div>
  );
};



export default MyPosts;
