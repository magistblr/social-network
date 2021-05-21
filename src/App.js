import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Route path="/dialogs" render={ () => <Dialogs/>}/>
        <Route path="/profile" render={ () => <Profile/>}/>
        <Route path="/news" render={ () => <News/>}/>
        <Route path="/music" render={ () => <Music/>}/>
        <Route path="/settings" render={ () => <Settings/>}/>
      </div>
    </BrowserRouter>
  );
}

export default App;