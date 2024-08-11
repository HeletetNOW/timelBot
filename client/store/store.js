import { projectsSlice } from "./projects/ProjectsSlice.js";
import { stopwatchsSlice } from "./stopwatchs/StopwatchsSlice.js";
import { userSlice } from "./user/UserSlice.js";

export const state = {
  currentMenu: "mainMenu",
  createStopwatchName: "",
  createProjectName: "",
  lastMessage: "",
  lastHandleredMessage: null,
  date: new Date(),
  userID: null,
  stopwatchs: null,
  projects: null,
};

export const store = {
  userSlice: userSlice(state),
  stopwatchsSlice: stopwatchsSlice(state),
  projectsSlice: projectsSlice(state),
};
