export function getTimeInFormatHHMM(date) {
  //let dateString = date.toLocaleTimeString();
  //let formattedDateString = dateString.slice(0, -3);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
  };

  return new Intl.DateTimeFormat(undefined, options).format(date);
}

export function addMinutesToDate(date, minutes) {
  let newDate = new Date(date.getTime() + minutes * 60000);
  return newDate;
}

export function HHMMtoMinutes(dateString) {
  let hours = Number(dateString.slice(0, 2));
  let minutes = Number(dateString.slice(-2));

  return hours * 60 + minutes;
}
