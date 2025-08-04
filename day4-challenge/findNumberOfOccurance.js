function findNumberOfOccurance(userInput, valueToCheck) {
  if (typeof userInput === "string" && typeof valueToCheck === "string") {
    let userInputValues = userInput.split(" ");
    let occurrance = 0;
    for (let i = 0; i < userInputValues.length; i++) {
      if (userInputValues[i].includes(valueToCheck.split(" ").join(""))) {
        occurrance++;
      }
    }
    return `${occurrance} occurance of ${valueToCheck} in the string`;
  } else {
    return "provide inputs as string";
  }
}
console.log(
  findNumberOfOccurance(
    "be kind whenever possible. kindness is what matters",
    "kind"
  )
);
