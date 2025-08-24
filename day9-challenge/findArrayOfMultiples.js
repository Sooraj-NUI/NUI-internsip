/*Get the result of the array in multiples
For example: [2, 5];
Result: [2, 4, 6, 8, 10]
*/

function findArrayOfMultiples(inputArray) {
  if (inputArray.length > 2 || inputArray.length < 1) {
    console.error("inputs must be of 2 digits");
    return false;
  }
  if (!Array.isArray(inputArray)) {
    console.error("inputs must be an array");
    return false;
  }
  const resultArray = []
  const firstInput = inputArray[0];
  const lastInput = inputArray[1];
  for (let i = 1; i <=lastInput; i++) {
resultArray[resultArray.length] = firstInput * i;
  }
  console.log(resultArray)
}
findArrayOfMultiples([2, 5]);
