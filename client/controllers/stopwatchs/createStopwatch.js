import { createStopwatchMenu } from "../../menu/stopwatchs/createStopwatchMenu.js";

export const createStopwatch = async (
  bot,
  userID,
  lastMessage,
  setCreateStopwatchName
) => {
  //   try {
  createStopwatchMenu(bot, userID, lastMessage, setCreateStopwatchName);

  // const stopwatchs = (await stopwatchsAPI.getStopwatchs(userID, new Date()))
  //   .data;

  // setStopwatchs(stopwatchs);

  // showStopwatchsMenu(bot, userID, getStopwatchs());
  //   } catch (error) {
  //     console.log("Ошибка");
  //   }
};
