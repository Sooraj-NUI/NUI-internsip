/*const arr1 = [4, 2, 5, 6, 8, 1];
const sum = 6;
numberOfPairs(arr1, sum);
// Pais that matches are [4, 2] => 6. [5, 1] => 6
So output 2
*/
const arr1 = [4, 2, 5,5];
const sum = 10;
function findNumberOfPairs(inputArray, sum) {
  if (!inputArray || !Array.isArray(inputArray) || typeof sum != "number") {
    console.log("Invalid input,please give the proper input");
    return false;
  }

  const result = [];
  for (let i = 0; i < inputArray.length; i++) {
    for (let j = i + 1; j < inputArray.length; j++) {
      if (inputArray[i] + inputArray[j] === sum) {
        result.push([inputArray[i], inputArray[j]]);
      }
    }
  }
  console.log(result);
  if (result.length === 0) {
    console.log(`There is no combination which makes the sum ${sum}`);
  }
  return result;
}
console.log(findNumberOfPairs(arr1, sum));
