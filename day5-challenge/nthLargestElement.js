function nthLargestElement(userData, position) {
  if (
    !Array.isArray(userData) ||
    typeof position !== "number" ||
    position > userData.length ||
    position < 1
  ) {
    return "Input must be an array and position must be a valid number within the array's range.";
  }
  let valueContainer = 0;
  for (let i = 0; i < userData.length; i++) {
    for (let j = 0; j < userData.length; j++) {
      if (userData[j] < userData[j + 1]) {
        valueContainer = userData[j + 1];
        userData[j + 1] = userData[j];
        userData[j] = valueContainer;
      }
    }
  }
  console.log(userData);

  return `The value at position ${position} is ${userData[position - 1]}`;
}
console.log(nthLargestElement([3, 4, 5, 6, 88], 6));
