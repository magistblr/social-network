
import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import FriendMessage from "./Message/FriendMessage";
import NewMessageContainer from './NewMessage/NewMessageContainer';


const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>);

  let messagesElements = state.messages.map( m => <Message message={m.message} id={m.id}/>);

  let friendMessagesElements = state.friendMessages.map( f => <FriendMessage message={f.message} id={f.id}/>);

  return (
    <div className="dialogs-wrapper">
      <div className="dialogs__items">
        <div className="dialogs__label">Dialogs</div>
        {dialogsElements}
      </div>
      <div>
        {friendMessagesElements}
        {messagesElements}
        <NewMessageContainer/>
      </div>
    </div>
  )
}

export default Dialogs;
