//Users can give a time like 2:30 (which means 2 hours 30 minutes). Write a function to convert this 2:30 to 150 minutes
// Try with different hours and minutes and cover all possible negative cases

function convertTimeToMinutes(inputString) {
  let hour = 0;
  let minute = 0;
  let totalHours = 0;
  let totalMinutes = 0;
  let foundColon = false;
  let totalTimeInMinutes = 0;
  for (let i = 0; i < inputString.length; i++) {
    console.log(inputString[i]);
    if (inputString[i] === ":") {
      foundColon = true;
      continue;
    }
    if (!foundColon) {
      hour += inputString[i];
    } else {
      minute += inputString[i];
    }
  }
  totalHours = Number(hour) * 60;
  console.log(totalHours);
  totalMinutes = Number(minute);
  console.log(totalMinutes);

  if (isNaN(totalHours) || isNaN(totalMinutes)) {
    console.error("inputs are not a number");
    return false;
  }
  if (totalMinutes < 0 || totalMinutes > 59) {
    console.error("minutes must be between 0 and 59");
    return false;
  }

  totalTimeInMinutes = totalHours + totalMinutes;
  console.log(totalHours);
}
convertTimeToMinutes("12:30");
