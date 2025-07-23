function addSpecialCharecter(userInput, position, valueToChange) {
  if (
    typeof userInput === "string" &&
    typeof position === "string" &&
    typeof valueToChange === "string" &&
    userInput.length > 0 &&
    position.length > 0 &&
    position.length < 2 &&
    valueToChange.length > 0
  ) {
    let isPositionValid = false;
    const userInputIntoValues = userInput.split("");
    for (let i = 0; i < userInputIntoValues.length; i++) {
      if (userInputIntoValues[i] === position) {
        isPositionValid = true;
      }
    }
    if (isPositionValid) {
      for (let i = 0; i < userInputIntoValues.length; i++) {
        if (userInputIntoValues[i] === position) {
          userInputIntoValues[i + 1] = valueToChange;
        }
      }
    } else {
      return "The element to check is not present in the given string";
    }
    return userInputIntoValues.join("");
  }
  return "The inputs must be non empty srings";
}
console.log(addSpecialCharecter("cat in the bag", "c", "@"));

console.log(addSpecialCharecter("", "c", "@"));
console.log(addSpecialCharecter("cat", "", "@"));
console.log(addSpecialCharecter("cat", "c", ""));
console.log(addSpecialCharecter("cat", "cc", "@"));
console.log(addSpecialCharecter(12345, "1", "@"));
console.log(addSpecialCharecter("cat", 1, "@"));
console.log(addSpecialCharecter("cat", "c", 5));
console.log(addSpecialCharecter());
console.log(addSpecialCharecter("cat"));
console.log(addSpecialCharecter("cat", "c"));
