import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/state"
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';




let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </BrowserRouter>, document.getElementById('root'));
}

//запускается первая функция
rerenderEntireTree(store.getState());

//перерисовка всего app после каждого действия
store.subscribe(rerenderEntireTree);



