export const createMessageButton = async (
  bot,
  userID,
  message,
  countButtons,
  handlerName,
  lastHandleredMessage,
  setLastHandleredMessage,
  keyboard
) => {
  let lineCount = Math.ceil(countButtons / 6);
  const inline_keyboards = [];

  for (let numberButton = 1; lineCount > 0; lineCount -= 1) {
    let oneLine = [];

    for (let i = 0; i < 6; i++) {
      if (numberButton <= countButtons) {
        oneLine.push({
          text: numberButton.toString(),
          callback_data: `${handlerName}_${numberButton}`,
        });
        numberButton += 1;
      }
    }

    inline_keyboards.push(oneLine);
  }

  const currentMessage = await bot.telegram.sendMessage(userID, message, {
    reply_markup: {
      inline_keyboard: inline_keyboards,
      resize_keyboard: true,
    },
  });

  await bot.telegram.sendMessage(userID, "Выберите опцию:", {
    reply_markup: {
      keyboard,
      resize_keyboard: true,
    },
  });

  if (lastHandleredMessage && !isNaN(lastHandleredMessage)) {
    await bot.telegram.editMessageReplyMarkup(
      Number(userID),
      lastHandleredMessage,
      { inline_keyboard: [] }
    );
  }
  setLastHandleredMessage(currentMessage.message_id);
};
