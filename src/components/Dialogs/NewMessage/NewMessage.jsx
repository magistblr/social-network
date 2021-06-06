import React from 'react'
import { sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogsReducer";

const NewMessage = (props) => {
console.log(props);
  let state = props.store.getState().dialogsPage;

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
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
