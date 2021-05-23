import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import { BrowserRouter } from 'react-router-dom';




export let rerenderEntireTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <App appState={state} addPost={addPost}/>
  </BrowserRouter>, document.getElementById('root'));
}




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals