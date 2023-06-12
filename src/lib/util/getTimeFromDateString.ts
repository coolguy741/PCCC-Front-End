export const getTimeFromDateString = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();

  return `${hours > 12 ? hours - 12 : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }${hours > 11 ? "PM" : "AM"}`;
};
