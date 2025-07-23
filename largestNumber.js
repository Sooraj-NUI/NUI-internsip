function findLargest(userInput, largestPosition) {
  let valueContainer = 0;
  if (
    Array.isArray(userInput) &&
    typeof largestPosition === "number" &&
    largestPosition > 0 &&
    largestPosition <= userInput.length
  ) {
    for (let i = 0; i < userInput.length; i++) {
      for (let j = 0; j < userInput.length; j++) {
        if (userInput[j] < userInput[j + 1]) {
          valueContainer = userInput[j + 1];
          userInput[j + 1] = userInput[j];
          userInput[j] = valueContainer;
        }
      }
    }
    return (
      `The  largest element at position ${largestPosition} is ` +
      userInput[largestPosition - 1]
    );
  }
  return "Array should be non empty values and value to check the posioin should be a positive number less than the length of the array";
}
console.log(findLargest([3, 4, 5, 6, 88, 1], 2));

console.log(findLargest([], 1));
console.log(findLargest([3, 4, 5], 0));
console.log(findLargest([3, 4, 5], -1));
console.log(findLargest([3, 4, 5], 4));
console.log(findLargest("hello", 2));
console.log(findLargest([3, 4, 5], "two"));
console.log(findLargest(null, 1));
console.log(findLargest(undefined, 1));
console.log(findLargest([3, 4, 5]));
console.log(findLargest());
