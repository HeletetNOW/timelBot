import { showStopwatchsMenu } from "../../menu/stopwatchs/showStopwatchsMenu.js";

export const showStopwatchs = async (
  bot,
  userID,
  stopwatchs,
  updateStopwatchs
) => {
  try {
    if (stopwatchs === null) {
      stopwatchs = await updateStopwatchs();
    }

    showStopwatchsMenu(bot, userID, stopwatchs);
  } catch (error) {
    console.log("Ошибка");
  }
};
