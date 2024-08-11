import { showMainMenu } from "../../menu/main/showMainMenu.js";
import { updateProjects } from "../../store/projects/ProjectsSlice.js";
import { updateStopwatchs } from "../../store/stopwatchs/StopwatchsSlice.js";
import { store } from "../../store/store.js";
import { showProjects } from "../projects/showProjects.js";
import { createStopwatch } from "../stopwatchs/createStopwatch.js";
import { showStopwatchs } from "../stopwatchs/showStopwatchs.js";

export const updateMenu = (bot) => {
  const currentMenu = store.userSlice.getCurrentMenu();
  const lastMessage = store.userSlice.getLastMessage();
  const userID = store.userSlice.getUserID();
  const lastHandleredMessage = store.userSlice.getLastHandleredMessage();

  const setLastHandleredMessage = store.userSlice.setLastHandleredMessage;
  const setCreateStopwatchName = store.stopwatchsSlice.setCreateStopwatchName;
  const setLastMessage = store.userSlice.setLastMessage;

  if (currentMenu === "mainMenu") {
    showMainMenu(bot, userID);
  } else if (currentMenu === "stopwatchsMenu") {
    showStopwatchs(
      bot,
      userID,
      store.stopwatchsSlice.getStopwatchs(),
      updateStopwatchs
    );
  } else if (currentMenu === "createStopwatchMenu") {
    createStopwatch(bot, userID, lastMessage, setCreateStopwatchName);
  } else if (currentMenu === "projectsMenu") {
    showProjects(
      bot,
      userID,
      store.projectsSlice.getProjects(),
      updateProjects,
      lastHandleredMessage,
      setLastHandleredMessage
    );
  }
};
