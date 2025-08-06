function sumOfCommaseperatedNumbers(userData) {
  if (typeof userData !== "string" || userData.length < 1) {
    return "input must be a non empty string value ";
  }
  let userDataValues = userData.split(",");
  let totalValue = 0;
  for (let i = 0; i < userDataValues.length; i++) {
    totalValue = Number(userDataValues[i]) + totalValue;
  }
  return totalValue;
}
console.log(sumOfCommaseperatedNumbers("1.5,2,44,66,12,90,0.5"));
