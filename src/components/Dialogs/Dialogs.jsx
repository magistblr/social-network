
import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import NewMessage from "./NewMessage/NewMessage";




const Dialogs = (props) => {


  let dialogsElements = props.dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  let messagesElements = props.messages.map( messages => <Message message={messages.message} id={messages.id}/>);

  return (
    <div className="dialogs-wrapper">
      <div className="dialogs__items">
        <div className="dialogs__label">Dialogs</div>
        {dialogsElements}
      </div>
      <div>
        {messagesElements}
        <NewMessage/>
      </div>
    </div>
  )
}

export default Dialogs;
