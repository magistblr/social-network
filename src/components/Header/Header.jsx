import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from "../../assets/img/soc_logo.png";


const Header = (props) => {
  return (
    <header className="header">
      <img src={logo} alt="logo" />
      <div className="header__login">
        {props.isAuth ? 'Ok' : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
}

export default Header;