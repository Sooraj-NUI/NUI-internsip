function sumOfMultiples(userInput, multiple) {
  if (typeof userInput !== "number" || typeof multiple !== "number") {
    return "both inputs must be a number";
  } else if (userInput <= 0 || multiple <= 0) {
    return "inputs must be a positive number";
  }
  let count = 0;
  for (let i = 1; i <= multiple; i++) {
    count = count + userInput * i;
  }
  return count;
}
console.log(sumOfMultiples(8, 3));
