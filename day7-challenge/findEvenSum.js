function findEvenSum(userInput) {
  if (!Array.isArray(userInput) || userInput.length<1) {
    console.log(userInput.length)
    return "both inputs must be a number";
  }
  let sum = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] % 2 === 0) {
      sum = sum + userInput[i];
    }
  }
  return sum;Ï
}
console.log(findEvenSum([38, 3, 2, 8, 31]));
