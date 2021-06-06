import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = (props) => {
  console.log(props);
  return (
      <div className="app-wrapper">
      <div className="app-wrapper-inner">
        <Header/>
        <Sidebar navbar={props.state.sidebarPage.navbar} friends={props.state.friendsBar.friends}/>
        <div className="content-wrapper">
          <Route path="/profile" render={ () => <Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
          <Route path="/messages" render={ () => <Dialogs dialogs={props.state.dialogsPage.dialogs} messages={props.state.dialogsPage.messages} friendMessages={props.state.dialogsPage.friendMessages} store={props.store}/>}/>
          <Route path="/news" render={ () => <News/>}/>
          <Route path="/music" render={ () => <Music/>}/>
          <Route path="/settings" render={ () => <Settings/>}/>
        </div>
      </div>
      </div>
  );

}

export default App;
