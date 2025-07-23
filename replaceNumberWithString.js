function replaceNumberWithString(userInput, valueToChange) {
  if (
    typeof userInput === "string" &&
    typeof valueToChange === "string" &&
    valueToChange.length > 0 &&
    userInput.length > 0
  ) {
    let userInputIntoArray = userInput.split("");
    for (let i = 0; i < userInputIntoArray.length; i++) {
      if (!isNaN(userInputIntoArray[i]) && userInputIntoArray[i] !== " ") {
        userInputIntoArray[i] = valueToChange;
      }
    }
    return userInputIntoArray.join("");
  } else {
    return "Inputs must be non empty string";
  }
}
console.log(replaceNumberWithString("arun@123", "d"));
//negetive cases
console.log(replaceNumberWithString("", "d"));
console.log(replaceNumberWithString("arun123", ""));
console.log(replaceNumberWithString(12345, "d"));
console.log(replaceNumberWithString("arun123", 1));
console.log(replaceNumberWithString(null, "d"));
console.log(replaceNumberWithString(undefined, "d"));
console.log(replaceNumberWithString("arun@123"));
console.log(replaceNumberWithString());
console.log(replaceNumberWithString([], "d"));
console.log(replaceNumberWithString("arun@123", []));
