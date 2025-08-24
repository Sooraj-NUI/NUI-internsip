/*1. Calculate total hours passed between two time
Accepted input format example "9:00 AM"
Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") // Output 6 Hour 12 minutes
*/

// Calculate total hours passed between two time
// Accepted input format example "9:00 AM"
// Ex: calculateTotalHoursElapsed("9:00 AM", "10:00 AM") //Output 1 Hour
// Ex: calculateTotalHoursElapsed("9:00 AM", "3:12 PM") //Output 6.2 Hours

function calculateTotalHoursElapsed(startTime, endTime) {
  // Helper function to parse time string and convert to 24-hour format
  function parseTime(timeStr) {
    const [time, period] = timeStr.split(" ");
    const [hours, minutes] = time.split(":").map(Number);
    console.log(typeof time.split(":"));

    let hour24 = hours;

    // Convert to 24-hour format
    if (period.toLowerCase() === "pm" && hours !== 12) {
      hour24 += 12;
    } else if (period.toLowerCase() === "am" && hours === 12) {
      hour24 = 0;
    }

    return { hours: hour24, minutes: minutes || 0 };
  }

  // Parse start and end times
  const start = parseTime(startTime);
  const end = parseTime(endTime);

  // Convert times to total minutes
  const startMinutes = start.hours * 60 + start.minutes;
  let endMinutes = end.hours * 60 + end.minutes;

  // Handle case where end time is next day (e.g., 9 PM to 6 AM)
  if (endMinutes < startMinutes) {
    endMinutes += 24 * 60; // Add 24 hours worth of minutes
  }

  // Calculate difference in minutes and convert to hours:minutes format
  const diffMinutes = endMinutes - startMinutes;
  const hours = Math.floor(diffMinutes / 60);
  const minutes = diffMinutes % 60;

  // Format as "H:MM"
  const formattedTime = `${hours}:${minutes.toString()}`;

  console.log("hours", formattedTime);
  return formattedTime;
}


// console.log(calculateTotalHoursElapsed("9:00 AM", "10:00 AM")); // Output: 1
console.log(calculateTotalHoursElapsed("9:00 AM", "3:00 PM"));
console.log(calculateTotalHoursElapsed("9:15 AM", "3:40 PM"));
