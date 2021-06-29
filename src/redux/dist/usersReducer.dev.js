"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.unfollow = exports.follow = exports.getUsers = exports.toggleFollowingProgress = exports.toggleIsFetching = exports.setUsersTotalCount = exports.setCurrentPages = exports.setUsers = exports.unfollowSuccess = exports.followSuccess = void 0;

var _api = require("../api/api");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var FOLLOW = 'FOLLOW';
var UNFOLLOW = 'UNFOLLOW';
var SET_USERS = 'SET_USERS';
var SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
var SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
var TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
var TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
var initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 11,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
};

var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case FOLLOW:
      return _objectSpread({}, state, {
        users: state.users.map(function (u) {
          if (u.id === action.userId) {
            return _objectSpread({}, u, {
              followed: true
            });
          }

          return u;
        })
      });

    case UNFOLLOW:
      return _objectSpread({}, state, {
        users: state.users.map(function (u) {
          if (u.id === action.userId) {
            return _objectSpread({}, u, {
              followed: false
            });
          }

          return u;
        })
      });

    case SET_USERS:
      {
        return _objectSpread({}, state, {
          users: action.users
        }); //берем старый стейт и новый(склеиваем)
      }

    case SET_CURRENT_PAGE:
      {
        return _objectSpread({}, state, {
          currentPage: action.currentPage
        }); //берем старый стейт и новый(склеиваем)
      }

    case SET_TOTAL_USERS_COUNT:
      {
        return _objectSpread({}, state, {
          totalUsersCount: action.count
        }); //берем старый стейт и новый(склеиваем)
      }

    case TOGGLE_IS_FETCHING:
      {
        return _objectSpread({}, state, {
          isFetching: action.isFetching
        }); //берем старый стейт и новый(склеиваем)
      }

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      {
        return _objectSpread({}, state, {
          followingInProgress: action.isFetching ? [].concat(_toConsumableArray(state.followingInProgress), [action.userId]) : state.followingInProgress.filter(function (id) {
            return id !== action.userId;
          })
        }); //берем старый стейт и новый(склеиваем)
      }

    default:
      return state;
  }
};

var followSuccess = function followSuccess(userId) {
  return {
    type: FOLLOW,
    userId: userId
  };
};

exports.followSuccess = followSuccess;

var unfollowSuccess = function unfollowSuccess(userId) {
  return {
    type: UNFOLLOW,
    userId: userId
  };
};

exports.unfollowSuccess = unfollowSuccess;

var setUsers = function setUsers(users) {
  return {
    type: SET_USERS,
    users: users
  };
};

exports.setUsers = setUsers;

var setCurrentPages = function setCurrentPages(currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  };
};

exports.setCurrentPages = setCurrentPages;

var setUsersTotalCount = function setUsersTotalCount(totalUsersCount) {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
  };
};

exports.setUsersTotalCount = setUsersTotalCount;

var toggleIsFetching = function toggleIsFetching(isFetching) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  };
};

exports.toggleIsFetching = toggleIsFetching;

var toggleFollowingProgress = function toggleFollowingProgress(isFetching, userId) {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching: isFetching,
    userId: userId
  };
}; //thunk logic


exports.toggleFollowingProgress = toggleFollowingProgress;

var getUsers = function getUsers(currentPage, pageSize) {
  return function (dispatch) {
    dispatch(toggleIsFetching(true));

    _api.userAPI.getUsers(currentPage, pageSize).then(function (data) {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setUsersTotalCount(data.totalCount));
    });
  };
};

exports.getUsers = getUsers;

var follow = function follow(userId) {
  return function (dispatch) {
    toggleFollowingProgress(true, userId);

    _api.userAPI.follow(userId).then(function (response) {
      if (response.data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }

      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

exports.follow = follow;

var unfollow = function unfollow(userId) {
  return function (dispatch) {
    toggleFollowingProgress(true, userId);

    _api.userAPI.unfollow(userId).then(function (response) {
      if (response.data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }

      dispatch(toggleFollowingProgress(false, userId));
    });
  };
};

exports.unfollow = unfollow;
var _default = usersReducer;
exports["default"] = _default;