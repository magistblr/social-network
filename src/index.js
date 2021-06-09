import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/reduxStore"
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';




  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>, document.getElementById('root'));

// //запускается первая функция
// rerenderEntireTree();

// //перерисовка всего app после каждого действия
// // store.subscribe( () => {
// //   rerenderEntireTree();
// // });
