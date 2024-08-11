import instance from "../instance.js";

export const projectsAPI = {
  async getProjects(userID) {
    return instance.post(`/projects`, { userID });
  },
  async createProject(userID, projectName) {
    return instance.post(`/projects/create`, { projectName, userID });
  },
};
