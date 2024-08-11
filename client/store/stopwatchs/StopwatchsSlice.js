import { stopwatchsAPI } from "../../app/api/stopwatchsAPI.js";
import { store } from "../store.js";

export const stopwatchsSlice = (state) => {
  return {
    getStopwatchs: () => {
      return state.stopwatchs;
    },
    setStopwatchs: (stopwatchs) => {
      state.stopwatchs = stopwatchs;
    },
    getCreateStopwatchName: () => {
      return state.createStopwatchName;
    },
    setCreateStopwatchName: (createStopwatchName) => {
      state.createStopwatchName = createStopwatchName;
    },
  };
};

export const updateStopwatchs = async () => {
  try {
    const userID = store.userSlice.getUserID();
    const date = store.userSlice.getDate();

    const data = (await stopwatchsAPI.getStopwatchs(userID, date)).data;

    store.stopwatchsSlice.setStopwatchs(data);

    return data;
  } catch (error) {
    console.log("Не удалось получить секундомеры.");
  }
};
