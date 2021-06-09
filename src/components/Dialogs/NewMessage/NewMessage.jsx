import React from 'react'

const NewMessage = (props) => {
  let newMessageBody = props.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  }


  return (
          <div className="new-message-wrapper">
            <div className="new-message">
              <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              name="text"
              placeholder="Enter your next"
              wrap="soft"/>
            </div>
            <div className="new-message__btn">
              <button onClick={onSendMessageClick}>Send</button>
            </div>
          </div>
  )
}


export default NewMessage;
