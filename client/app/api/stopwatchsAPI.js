import instance from "../instance.js";

export const stopwatchsAPI = {
  async getStopwatchs(userID, date) {
    return instance.post(`/timers`, { date, userID });
  },
  async createStopwatch(userID, timerName, date) {
    return instance.post(`/timers/add`, { timerName, date, userID });
  },
};
