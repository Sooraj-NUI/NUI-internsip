function groupWithInitialChat(userData) {
  if (!Array.isArray(userData) || userData.length < 1) {
    return "input should be an array of string with non empty values";
  }
  let finalGroup = [];
  let visitedStartingLetters = new Set();
  for (let i = 0; i < userData.length; i++) {
    let firstLetter = userData[i].charAt(0);
    if (!visitedStartingLetters.has(firstLetter)) {
      let temporaryGroup = [];
      for (let j = 0; j < userData.length; j++) {
        if (userData[j].charAt(0) === firstLetter) {
          temporaryGroup.push(userData[j]);
        }
      }
      finalGroup.push(temporaryGroup);
      visitedStartingLetters.add(firstLetter);
    }
  }
  return finalGroup;
}
console.log(
  groupWithInitialChat([
    "arun",
    "balu",
    "cathy",
    "krish",
    "aadhir",
    "aariketh",
    "kamal",
  ])
);
