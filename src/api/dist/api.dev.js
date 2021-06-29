"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userAPI = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var instance = _axios["default"].create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  //автоматом приклеивается к адресу в запросе(важно писать URL с большой буквы)
  headers: {
    "API-KEY": "bb8b9c32-3a16-4cd6-8ee3-c45b813c19f5"
  }
});

var userAPI = {
  getUsers: function getUsers() {
    var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    return instance.get("users?page=".concat(currentPage, "&count=").concat(pageSize)) //запрос
    .then(function (response) {
      return response.data;
    });
  },
  follow: function follow(userId) {
    return instance.post("follow/".concat(userId)); //запрос
  },
  unfollow: function unfollow(userId) {
    return instance["delete"]("follow/".concat(userId)); //запрос
  }
};
exports.userAPI = userAPI;