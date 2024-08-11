import { authAPI } from "../../app/api/authAPI.js";
import { showMainMenu } from "../../menu/main/showMainMenu.js";

export const startCommand = async (bot, userID) => {
  try {
    await authAPI.register(userID);

    bot.telegram.sendMessage(userID, "Выберите опцию:");
  } catch (error) {
    await bot.telegram.sendMessage(userID, "Вы уже зарегистрированы.");
    showMainMenu(bot, userID);
  }
};
