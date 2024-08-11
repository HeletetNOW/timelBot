import { createMessageButton } from "../../controllers/general/createMessageButtons.js";
import { timeConverter } from "../../controllers/stopwatchs/timeConverter.js";

export const showProjectsMenu = (
  bot,
  userID,
  projects,
  lastHandleredMessage,
  setLastHandleredMessage
) => {
  let message = "Все проекты:" + "\n\n";

  projects.map((project, count) => {
    message =
      message +
      (count + 1) +
      `.${project.projectName} | ${timeConverter(project.sumTime)} | ${
        project.status ? "Выполнено" : "Не выполнено"
      }`;
  });

  createMessageButton(
    bot,
    userID,
    message,
    projects.length,
    "test",
    lastHandleredMessage,
    setLastHandleredMessage,
    [
      [{ text: "Предыдущая страница" }, { text: "Следующая страница" }],
      [{ text: "Создать проект" }],
      [{ text: "Поиск по имени" }],
      [{ text: "Назад" }],
    ]
  );
};
