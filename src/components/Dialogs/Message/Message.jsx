import React from 'react';

const Message = (props) => {



  return (
          <div className="dialogs__users-wrapper">
            <div className="dialogs__users-message">{props.message}</div>
            <div className="dialogs__users">
              <div className="dialogs__users-avatar">
                <img src="https://yt3.ggpht.com/ytc/AAUvwniWcUyONM4Tu8W_39ae7hyeTOrxPjdmjeKjyb6U=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
              </div>
              <div className="dialogs__users-name">Me</div>
              </div>
          </div>

  )
}


export default Message;
