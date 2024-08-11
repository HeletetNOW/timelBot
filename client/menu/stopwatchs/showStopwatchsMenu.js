import { timeConverter } from "../../controllers/stopwatchs/timeConverter.js";

export const showStopwatchsMenu = (bot, userID, stopwatchs) => {
  let message = "Список секундомеров созданных сегодня:" + "\n\n";

  stopwatchs.map((stopwatch, count) => {
    message =
      message +
      (count + 1) +
      `.${stopwatch.timerName}` +
      ` | ${timeConverter(stopwatch.sumTime)}` +
      "\n";
  });

  bot.telegram.sendMessage(userID, message, {
    reply_markup: {
      keyboard: [
        [{ text: "Создать секундомер" }],
        [{ text: "Выбрать дату" }],
        [{ text: "Назад" }],
      ],
      resize_keyboard: true,
    },
  });
};
