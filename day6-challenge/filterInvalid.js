function filterInvalid(userInput, userInputType) {
  if (!Array.isArray(userInput) && userInputType !== "string") {
    return "The values should be in an array and the type to remove should be a string.";
  }
  let filteredValue = [];
  for (let i = 0; i < userInput.length; i++) {
    if (typeof userInput[i] !== userInputType) filteredValue.push(userInput[i]);
  }
  return filteredValue;
}
console.log(filterInvalid(["a", "d", 1, true, "cd", 33], "number"));
console.log(filterInvalid(["a", "d", 1, true, "cd", 33], "boolean"));
console.log(filterInvalid(["a", "d", 1, true, "cd", 33], "string"));

