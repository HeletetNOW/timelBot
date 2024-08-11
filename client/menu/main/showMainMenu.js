export const showMainMenu = (bot, userID) => {
  bot.telegram.sendMessage(userID, "Выберите опцию:", {
    reply_markup: {
      keyboard: [
        [{ text: "Секундомеры" }],
        [{ text: "Проекты" }],
        [{ text: "Настройки" }],
      ],
      resize_keyboard: true,
    },
  });
};
