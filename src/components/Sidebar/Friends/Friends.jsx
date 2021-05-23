


const Friends = (props) => {

  return (
    <div className="sidebar__friends-item">
      <div className="sidebar__friends-avatar"></div>
      <div className="sidebar__friends-name">{props.name}</div>
    </div>
  );
}

export default Friends;