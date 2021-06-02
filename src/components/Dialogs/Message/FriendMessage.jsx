
const FriendMessage = (props) => {



  return (
          <div className="dialogs__users-wrapper-friend">
            <div className="dialogs__users-friend">
              <div className="dialogs__users-avatar-friend">
                <img src="https://yt3.ggpht.com/ytc/AAUvwniWcUyONM4Tu8W_39ae7hyeTOrxPjdmjeKjyb6U=s900-c-k-c0x00ffffff-no-rj" alt="avatar" />
              </div>
              <div className="dialogs__users-name-friend">Dima</div>
            </div>
            <div className="dialogs__users-message-friend">{props.message}</div>
          </div>

  )
}


export default FriendMessage;
