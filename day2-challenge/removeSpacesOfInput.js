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

console.log(removeSpacesFromInput("dfdf dfndfn"));
