import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


const App = (props) => {
  return (
      <div className="app-wrapper">
      <div className="app-wrapper-inner">
        <HeaderContainer/>
        <SidebarContainer/>
        <div className="content-wrapper">
          <Route path="/profile/:userId?" render={ () => <ProfileContainer />}/>
          <Route path="/messages" render={ () => <DialogsContainer/>}/>
          <Route path="/users" render={ () => <UsersContainer/>}/>
          <Route path="/news" render={ () => <News/>}/>
          <Route path="/music" render={ () => <Music/>}/>
          <Route path="/settings" render={ () => <Settings/>}/>
        </div>
      </div>
      </div>
  );

}

export default App;
