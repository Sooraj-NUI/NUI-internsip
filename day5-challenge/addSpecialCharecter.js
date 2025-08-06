function addSpecialCharecter(userData, targetLetter, specialChar) {
  let valueContainer = [];
  if (
    typeof userData !== "string" ||
    typeof targetLetter !== "string" ||
    typeof specialChar !== "string" ||
    specialChar.length < 1 ||
    targetLetter.length < 1 ||
    userData.length < 1
  ) {
    return "All the inputs should be string non empty values";
  }
  let userDataValues = userData.split("");
  for (let i = 0; i < userDataValues.length; i++) {
    valueContainer.push(userDataValues[i]);
    if (userDataValues[i].toLowerCase() === targetLetter.toLowerCase()) {
      valueContainer.push(specialChar);
    }
  }
  return valueContainer.join("");
}
console.log(addSpecialCharecter("cat in the bag", "c", "@"));
