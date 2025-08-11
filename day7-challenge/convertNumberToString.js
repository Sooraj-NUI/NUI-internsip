function numberToString(userInput) {
    userInput = Number(userInput)
    if (isNaN(userInput) || userInput < 0) {
        return "inputs must be a number >= 0"
    }
    finalString = ""
    const numberWords = [
  "zero", "one", "two", "three", "four",
  "five", "six", "seven", "eight", "nine"
];
userInput = userInput.toString()

console.log(numberWords[0]);

for (let i = 0;i<userInput.length;i++){
    console.log(userInput[i])
console.log(numberWords[userInput[i]])
finalString = finalString+numberWords[userInput[i]]
}
return finalString;
}
console.log(numberToString(98));
