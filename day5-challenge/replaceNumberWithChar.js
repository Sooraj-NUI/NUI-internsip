function replaceNumberWithChar(userData, targetLetter) {
  if (
    typeof userData !== "string" ||
    typeof targetLetter !== "string" ||
    userData.length < 1 ||
    targetLetter.length < 1
  ) {
    return "Inputs should be non empty string values ";
  }
  let userDataValues = userData.split("");
  for (let i = 0; i < userDataValues.length; i++) {
    if (!isNaN(userDataValues[i])) {
      userDataValues[i] = targetLetter;
    }
  }
  return userDataValues.join("");
}
console.log(replaceNumberWithChar("arun@123", "d"));
