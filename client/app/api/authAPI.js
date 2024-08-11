import instance from "../instance.js";

export const authAPI = {
  async register(userID) {
    return instance.get(`/users/register/${userID}`);
  },
};
