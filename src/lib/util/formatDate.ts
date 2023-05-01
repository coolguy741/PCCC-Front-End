export const formatDate = (date: string) => {
  const _date = new Date(date).toDateString().split(" ");

  const formattedDate = `${_date[1]} ${_date[2]}, ${_date[3]}`;

  return formattedDate;
};
