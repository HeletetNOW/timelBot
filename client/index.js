import dotenv from "dotenv";

import { Telegraf } from "telegraf";
import { startCommand } from "./controllers/user/startCommand.js";
import { store } from "./store/store.js";
import { updateMenu } from "./controllers/user/updateMenu.js";
import { changeMenu } from "./controllers/user/changeMenu.js";

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN, {});

bot.start((ctx) => {
  startCommand(bot, ctx.from.id);
});

bot.on("message", async (ctx) => {
  store.userSlice.setUserID(ctx.from.id);
  store.userSlice.setLastMessage(ctx.message.text);

  if (ctx.message.text === "Назад") {
    changeMenu("return");
  } else if (ctx.message.text === "Секундомеры") {
    changeMenu("change", "stopwatchsMenu");
  } else if (ctx.message.text === "Создать секундомер") {
    changeMenu("change", "createStopwatchMenu");
  } else if (ctx.message.text === "Проекты") {
    changeMenu("change", "projectsMenu");
  }

  updateMenu(bot);
});

bot.launch();
