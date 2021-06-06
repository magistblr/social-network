import React from 'react';

import {NavLink} from 'react-router-dom';



const Navbar = (props) => {


  return (
      <div>
        <div className="navbar__list">
          <div className="navbar__list-item">
            <div>
            <NavLink to={props.url}>{props.name}</NavLink>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Navbar;