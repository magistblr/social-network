
const NewMessage = (props) => {



  return (
          <div className="new-message-wrapper">
            <div className="new-message">
              <textarea name="text" placeholder="text" wrap="soft"/>
            </div>
            <div className="new-message__btn">
              <button>Send</button>
            </div>
          </div>
  )
}


export default NewMessage;
