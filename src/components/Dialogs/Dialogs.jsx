
import React from 'react';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";




const Dialogs = (props) => {

    let dialogs = [
    {id: 1, name: 'Dima'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
  ]

  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'I am a normal popover and i can have text and everything'},
    {id: 4, message: 'YO'},
    {id: 5, message: 'YO'}
  ]


  let dialogsElements = dialogs.map( dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

  let messagesElements = messages.map(messages => <Message message={messages.message} id={messages.id}/>);

  return (
    <div className="dialogs-wrapper">
      <div className="dialogs__items">
        <div className="dialogs__label">Dialogs</div>
        {dialogsElements}
      </div>
      <div>
        {messagesElements}
      </div>
    </div>
  )
}

export default Dialogs;
