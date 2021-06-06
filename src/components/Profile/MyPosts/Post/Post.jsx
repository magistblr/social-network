import React from 'react';


const Post = (props) => {


  return (
    <div className="messages-wrapper">
      <div className="messages__avatar">
        <img src="https://yt3.ggpht.com/ytc/AAUvwniWcUyONM4Tu8W_39ae7hyeTOrxPjdmjeKjyb6U=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
      </div>
      <div className="messages__message-wrapper">
        <div className="messages__message">{props.message}</div>
      </div>
    </div>
  );
};

export default Post;
