import axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',    //автоматом приклеивается к адресу в запросе(важно писать URL с большой буквы)
  headers: {
    "API-KEY": "bb8b9c32-3a16-4cd6-8ee3-c45b813c19f5"
  }
})

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)       //запрос
      .then(response => {
        return response.data;
      });
  },

  follow(userId) {
    return instance.post(`follow/${userId}`)       //запрос
  },

  unfollow(userId) {
    return instance.delete(`follow/${userId}`)       //запрос
  }
}
