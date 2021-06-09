import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import SidebarContainer from './components/Sidebar/SidebarContainer';


const App = (props) => {
  return (
      <div className="app-wrapper">
      <div className="app-wrapper-inner">
        <Header/>
        <SidebarContainer/>
        <div className="content-wrapper">
          <Route path="/profile" render={ () => <Profile />}/>
          <Route path="/messages" render={ () => <DialogsContainer/>}/>
          <Route path="/news" render={ () => <News/>}/>
          <Route path="/music" render={ () => <Music/>}/>
          <Route path="/settings" render={ () => <Settings/>}/>
        </div>
      </div>
      </div>
  );

}

export default App;
