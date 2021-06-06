import React from 'react';

import Navbar from "./Navbar/Navbar"
import Friends from "./Friends/Friends"


const Sidebar = (props) => {
  let navElements = props.navbar.map( items => <Navbar url={items.url} name={items.name} id={items.id}/>);

  let friendsElements = props.friends.map( items => <Friends name={items.name} id={items.id}/>);

  return (
    <nav className="sidebar item">
        {navElements}
      <div className="sidebar__friends">
        <div className="sidebar__friends-label">Friends</div>
        <div className="sidebar__friends-items">
          {friendsElements}
        </div>
      </div>
    </nav>
  );
}

export default Sidebar;