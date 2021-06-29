import { applyMiddleware, combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarPageReducer from './sidebarPageReducer'
import sidebarReducer from './sidebarReducer'
import friendsBarReducer from './friendsBarReducer'
import usersReducer from "./usersReducer";
import authReducer from "./auth-redux";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarPageReducer,
  sidebar: sidebarReducer,
  friendsBar: friendsBarReducer,
  usersPage: usersReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;