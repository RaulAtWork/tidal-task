export function getTimeInFormatHHMM(date) {
  //let dateString = date.toLocaleTimeString();
  //let formattedDateString = dateString.slice(0, -3);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
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

/***
 * Evaluates whether a timeframe is colliding with the other existing timeframes
 * @param {string} startTime - hh:mm
 * @param {string} endTime - hh:mm
 * @param {Array} bookedTimes - [{startTime, endTime}]
 */
export function timeframeIsBooked(startTime, endTime, bookedTimes) {
  // If bookedTimes is empty -> return false
  if (bookedTimes.length === 0) return false;

  let startMinutes = HHMMtoMinutes(startTime);
  let endMintues = HHMMtoMinutes(endTime);

  for (const bt of bookedTimes) {
    let bookedStartMinutes = HHMMtoMinutes(bt.startTime);
    let bookedEndMinutes = HHMMtoMinutes(bt.endTime);

    // If start time or end time is between start and end of bookedTimes nay item
    if (bookedStartMinutes < startMinutes && startMinutes < bookedEndMinutes)
      return true;
    if (bookedStartMinutes < endMintues && endMintues < bookedEndMinutes)
      return true;

    //If start time is before booked start time and end time is after booked end time
    if (startMinutes <= bookedStartMinutes && bookedEndMinutes <= endMintues)
      return true;
  }

  // if all the checks have passed then we return false meaning that is not booked at all
  return false;
}
/**
 * Only accepts time in HH:MM format
 * @param {string} startTime
 * @param {string} endTime
 * @returns the difference in minutes
 */
export function calculateTimeDifferenceInMinutes(startTime, endTime) {
  return HHMMtoMinutes(endTime) - HHMMtoMinutes(startTime);
}
