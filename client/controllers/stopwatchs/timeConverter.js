export const timeConverter = (sumTime) => {
  let hours = Math.floor(sumTime / 3600)
    .toString()
    .padStart(2, "0");
  let minutes = Math.floor((sumTime % 3600) / 60)
    .toString()
    .padStart(2, "0");
  let seconds = Math.floor(sumTime % 60)
    .toString()
    .padStart(2, "0");
  return hours + ":" + minutes + ":" + seconds;
};
