export const createStopwatchMenu = (
  bot,
  userID,
  lastMessage,
  setCreateStopwatchName
) => {
  if (lastMessage === "Создать секундомер") {
    return bot.telegram.sendMessage(userID, "Введите название секундомера", {
      reply_markup: {
        keyboard: [[{ text: "Назад" }]],
        resize_keyboard: true,
      },
    });
  }

  setCreateStopwatchName(lastMessage);
};
