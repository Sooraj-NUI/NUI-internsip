function sortingFunction(userData) {
  if (!Array.isArray(userData) || userData.length < 1) {
    return "provide a valid array";
  }
  let valueContainer = 0;
  for (let i = 0; i < userData.length; i++) {
    for (let j = 0; j < userData.length; j++) {
      if (userData[j] > userData[j + 1]) {
        valueContainer = userData[j + 1];
        userData[j + 1] = userData[j];
        userData[j] = valueContainer;
      }
    }
  }
  return userData;
}
function sumOfTwoLargestNumbers(userData) {
  if (!Array.isArray(userData) || userData.length < 1) {
    return "provide an array an input with atleast one element";
  }
  let sortedData = sortingFunction(userData);
  let sumOfLargestNumbers =
    sortedData[sortedData.length - 1] + sortedData[sortedData.length - 2];
  return sumOfLargestNumbers;
}
console.log(sumOfTwoLargestNumbers([32, 66, 80, 120, 45]));
