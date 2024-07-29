export function getTimeInFormatHHMM(date) {
  let dateString = date.toLocaleTimeString();
  let formattedDateString = dateString.slice(0, -3);
  return formattedDateString;
}

export function addMinutesToDate(date, minutes) {
  let newDate = new Date(date.getTime() + minutes * 60000);
  return newDate;
}
