import {NavLink} from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="navbar item ">
      <div className="navbar__list">
        <div className="list__item">
          <NavLink to="/profile">Profile</NavLink>
        </div>
        <div className="list__item">
          <NavLink to="/dialogs">Messages</NavLink>
        </div>
        <div className="list__item">
          <NavLink to="/news">News</NavLink>
        </div>
        <div className="list__item">
          <NavLink to="/music">Music</NavLink>
        </div>
        <div className="list__item">
          <NavLink to="/settings">Settings</NavLink>
        </div>
      </div>
      <div className="navbar__friends">
        <div className="navbar__friends-label">Friends</div>
        <div className="navbar__friends-items">
          <div className="navbar__friends-item">
            <div className="friends__avatar"></div>
            <div className="friends__name">Andrew</div>
          </div>
          <div className="navbar__friends-item">
            <div className="friends__avatar"></div>
            <div className="friends__name">Sasha</div>
          </div>
          <div className="navbar__friends-item">
            <div className="friends__avatar"></div>
            <div className="friends__name">Sveta</div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;