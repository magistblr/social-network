import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {id: 1, message: 'Hi, how are you?'},
    {id: 2, message: "It's my first post"}
  ]

  let postsElements = posts.map( posts => <Post message={posts.message}/>);



  return (
    <div className="content__posts">
      <div className="posts__post">My posts</div>
      <div className="posts__new-post">
        <input type="text" placeholder="your news..." />
      </div>
      <div className="posts__btn">
        <button>Send</button>
      </div>
      {postsElements}
    </div>
  );
};



export default MyPosts;
