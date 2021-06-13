import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer'
import dialogsReducer from './dialogsReducer'
import sidebarPageReducer from './sidebarPageReducer'
import sidebarReducer from './sidebarReducer'
import friendsBarReducer from './friendsBarReducer'
import usersReducer from "./usersReducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarPage: sidebarPageReducer,
  sidebar: sidebarReducer,
  friendsBar: friendsBarReducer,
  usersPage: usersReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;