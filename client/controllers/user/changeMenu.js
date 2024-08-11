import { store } from "../../store/store.js";

export const changeMenu = (act, newMenu) => {
  const currentMenu = store.userSlice.getCurrentMenu();

  if (act === "change") {
    store.userSlice.setCurrentMenu(newMenu);
  } else if (act === "return") {
    if (currentMenu === "stopwatchsMenu") {
      store.userSlice.setCurrentMenu("mainMenu");
    } else if (currentMenu === "createStopwatchMenu") {
      store.userSlice.setCurrentMenu("stopwatchsMenu");
    } else if (currentMenu === "projectsMenu") {
      store.userSlice.setCurrentMenu("mainMenu");
    }
  }
};
