function checkNumberInRange(userData, targetNumber) {
  if (
    !Array.isArray(userData) ||
    typeof targetNumber !== "number" ||
    userData.length !== 2
  ) {
    return "userData must be an array of two numbers and targetNumber must be a number.";
  }
  if (targetNumber >= userData[0] && targetNumber <= userData[1]) {
    return true;
  }
  return false;
}
console.log(checkNumberInRange([1, 10], 4));
