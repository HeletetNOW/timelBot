import { projectsAPI } from "../../app/api/projectsAPI.js";
import { store } from "../store.js";

export const projectsSlice = (state) => {
  return {
    getProjects: () => {
      return state.projects;
    },
    setProjects: (projects) => {
      state.projects = projects;
    },
    getCreateProjectName: () => {
      return state.createProjectsName;
    },
    setCreateProjectName: (createProjectsName) => {
      state.createProjectsName = createProjectsName;
    },
  };
};

export const updateProjects = async () => {
  try {
    const userID = store.userSlice.getUserID();

    const data = (await projectsAPI.getProjects(userID)).data;

    store.projectsSlice.setProjects(data);

    return data;
  } catch (error) {
    console.log("Не удалось получить проекты.");
  }
};
