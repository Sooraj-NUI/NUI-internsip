function removeSpacesFromInput(userInput) {
    if (typeof userInput === "string" && userInput !== "") {
        const userCharacters = [];

        for (let i = 0; i < userInput.length; i++) {
            if (userInput[i] !== " ") {
                userCharacters.push(userInput[i]);
            }
        }

        return userCharacters.join("");
    } else {
        return "The input value should be a string";
    }
}

console.log(removeSpacesFromInput("sooraj raju"));
console.log(removeSpacesFromInput(12345));           // number input
console.log(removeSpacesFromInput(null));            // null input
console.log(removeSpacesFromInput(undefined));       // undefined
console.log(removeSpacesFromInput({}));              // object
console.log(removeSpacesFromInput(["abc def"]));     // array
console.log(removeSpacesFromInput(true));            // boolean
console.log(removeSpacesFromInput(-1));                // no argument
