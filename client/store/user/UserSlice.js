export const userSlice = (state) => {
  return {
    getUserID: () => {
      return state.userID;
    },
    setUserID: (userID) => {
      state.userID = `${userID}`;
    },
    getCurrentMenu: () => {
      return state.currentMenu;
    },
    setCurrentMenu: (currentMenu) => {
      state.currentMenu = currentMenu;
    },
    getLastMessage: () => {
      return state.lastMessage;
    },
    setLastMessage: (newMessage) => {
      state.lastMessage = newMessage;
    },
    getDate: () => {
      return state.date;
    },
    setDate: (date) => {
      state.date = date;
    },
    getLastHandleredMessage: () => {
      return state.lastHandleredMessage;
    },
    setLastHandleredMessage: (lastHandleredMessage) => {
      state.lastHandleredMessage = lastHandleredMessage;
    },
  };
};
