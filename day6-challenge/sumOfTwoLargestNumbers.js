function sortingFunction(numbers) {
  if (!Array.isArray(numbers) || numbers.length < 1) {
    return "provide a valid array";
  }
  let valueContainer = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[j] > numbers[j + 1]) {
        valueContainer = numbers[j + 1];
        numbers[j + 1] = numbers[j];
        numbers[j] = valueContainer;
      }
    }
  }
  return numbers;
}
function sumOfTwoLargestNumbers(numbers) {
  if (!Array.isArray(numbers) || numbers.length < 1) {
    return "provide an array an input with atleast one element";
  }
  let sortedData = sortingFunction(numbers);
  let sumOfLargestNumbers =
    sortedData[sortedData.length - 1] + sortedData[sortedData.length - 2];
  return sumOfLargestNumbers;
}
console.log(sumOfTwoLargestNumbers([32, 66, 80, 120, 45]));
