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


const App = (props ) => {
  return (
      <div className="app-wrapper">
        <Header/>
        <Sidebar navbar={props.appState.sidebarPage.navbar} friends={props.appState.friendsBar.friends}/>
        <Route path="/profile" render={ () => <Profile posts={props.appState.profilePage.posts} addPost={props.addPost}/>}/>
        <Route path="/dialogs" render={ () => <Dialogs dialogs={props.appState.dialogsPage.dialogs} messages={props.appState.dialogsPage.messages}/>}/>
        <Route path="/news" render={ () => <News/>}/>
        <Route path="/music" render={ () => <Music/>}/>
        <Route path="/settings" render={ () => <Settings/>}/>
      </div>
  );
}

export default App;
