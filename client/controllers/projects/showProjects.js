import { showProjectsMenu } from "../../menu/projects/showProjectsMenu.js";

export const showProjects = async (
  bot,
  userID,
  projects,
  updateProjects,
  lastHandleredMessage,
  setLastHandleredMessage
) => {
  try {
    if (projects === null) {
      projects = await updateProjects();
    }
    showProjectsMenu(
      bot,
      userID,
      projects,
      lastHandleredMessage,
      setLastHandleredMessage
    );
  } catch (error) {
    console.log("Ошибка");
  }
};
